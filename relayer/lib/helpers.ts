import { Contract, providers } from "ethers";
import { originSettlerAbi, testableERC20Abi } from "../abi";
import { env } from ".";

export function getProvider(providerUrl: string) {
  return new providers.JsonRpcProvider(providerUrl);
}
export function getOriginSettlerContract(provider: providers.Provider) {
  return new Contract(env.originSettler, originSettlerAbi, provider);
}

export function getTestableERC20Contract() {
  const provider = getProvider(env.destinationProviderUrl);
  return new Contract(
    "0x28077B47Cd03326De7838926A63699849DD4fa87",
    testableERC20Abi,
    provider
  );
}
