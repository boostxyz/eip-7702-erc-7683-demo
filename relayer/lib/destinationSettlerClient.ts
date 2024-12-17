import { BigNumber, BytesLike, Contract, utils } from 'ethers'
import {
  http,
  type Account,
  Address,
  type Chain,
  SendTransactionParameters,
  SendTransactionRequest,
  type Transport,
  type WalletClient,
  createWalletClient,
} from 'viem'
import { privateKeyToAccount } from 'viem/accounts'
import { erc20Abi } from '../abi'
import {
  FillInstructionStruct,
  OutputStruct,
  type ResolvedCrossChainOrderStruct,
} from '../contract-types/OriginSettler'
import {
  getDestinationProvider,
  getDestinationSettlerContract,
  odyssey2,
} from './'

type AbiData = `0x${string}`

type ContractCall = {
  targetAddress: AbiData
  data: AbiData
}

export class DestinationSettlerClient {
  private viemSigner: WalletClient<Transport, Chain, Account>
  private destinationSettler: Contract
  private destinationChainId: BigNumber
  constructor(privateKey: AbiData) {
    this.viemSigner = createWalletClient({
      account: privateKeyToAccount(privateKey),
      chain: odyssey2,
      transport: http(),
    });
    this.destinationSettler = getDestinationSettlerContract(
      getDestinationProvider(),
    );
    this.destinationChainId = BigNumber.from(this.viemSigner.chain.id)
  }

  async fill(
    resolvedCrossChainOrder: ResolvedCrossChainOrderStruct,
  ): Promise<string> {
    // This we should only fill if the event we observed is for the client's chain ID and settler contract. In the future, this should be moved a level up
    // so that we can assume that all orders here are for this client's configured destination settler.
    // FIXME I should also filter off of destination settlers, but the demo contracts hardcode 0x123 as the target destination settler, so this filter is ignored for now.
    const originDataForChain = resolvedCrossChainOrder.fillInstructions.filter(
      (instruction) =>
        this.destinationChainId.eq(instruction.destinationChainId),
    )
    // TODO: Fix.
    const outputAmounts = resolvedCrossChainOrder.minReceived.filter(
      (minReceived, idx) =>
        this.destinationChainId.eq(
          resolvedCrossChainOrder.fillInstructions[idx].destinationChainId,
        ),
    )
    const orderId = resolvedCrossChainOrder.orderId
    if (originDataForChain.length === 0) {
      return
    }
    const idx = 0
    // FIXME This is a pretty significant simplification where we assume that there is only one fill instruction we need to call. We really should be multicalling
    // if there are more fill instructions we can execute. Notice that the for loop will only execute once if there is a fill available on this chain.
    for (const originData of originDataForChain) {
      const tokenAddress = utils.hexDataSlice(outputAmounts[idx].token, 12)
      // Check if we have sufficient approval.
      const token = new Contract(
        tokenAddress,
        erc20Abi,
        this.destinationSettler.provider,
      )
      const approval = await token.allowance(
        this.viemSigner.account.address,
        this.destinationSettler.address,
      )
      if (approval.lt(outputAmounts[idx].amount)) {
        const approveData = await token.populateTransaction.approve(
          this.destinationSettler.address,
          outputAmounts[idx].amount,
        )
        const approvalCall = {
          targetAddress: token.address,
          data: approveData.data,
        } as ContractCall
        const approveTxHash = await this.send(approvalCall);
	// TODO: Await the approval
	//const receipt = await this.viemProvider.waitForTransactionReceipt({ hash: approveTxHash });
      }
      const data = await this.destinationSettler.populateTransaction.fill(
        orderId,
        originData.originData,
        '0x',
      )
      // Although we do not need to convert the contract call into a viem-friendly type (as we can just use ethers.js), we do so since viem supports
      // type 4 transactions, which are needed when the destination user has not delegated an address. However, for this demo, we assume that the user already
      // has an address delegated.
      const contractCall = {
        targetAddress: data.to,
        data: data.data,
      } as ContractCall
      return this.send(contractCall)
    }
    throw new Error('No relevant deposits for this origin chain.')
  }

  private async send(call: ContractCall): Promise<string> {
    const txnResult = await this.viemSigner.sendTransaction({
      account: this.viemSigner.account,
      to: call.targetAddress,
      data: call.data,
      chain: this.viemSigner.chain,
      kzg: undefined,
    })
    return txnResult
  }
}
