// SPDX-License-Identifier: BUSL-1.1
pragma solidity ^0.8.0;

import { Script } from "forge-std/Script.sol";
import { Test } from "forge-std/Test.sol";

import { DestinationSettler, XAccount } from "../src/DestinationSettler.sol";

// How to run:
// 1. `source .env` where `.env has MNEMONIC="x x x ... x" and ETHERSCAN_API_KEY="x" entries
// 2. forge script script/DeployDestinationSettler.s.sol:DeployDestinationSettler --rpc-url $NODE_URL_1-vvvv
// 3. Verify the above works in simulation mode.
// 4. Deploy on mainnet by adding --broadcast --verify flags.
// 5. forge script script/DeployDestinationSettler.s.sol:DeployDestinationSettler --rpc-url $NODE_URL_1 --broadcast --verify -vvvv
contract DeployDestinationSettler is Script, Test {

    function run() external {
        string memory deployerMnemonic = vm.envString("MNEMONIC");
        uint256 deployerPrivateKey = vm.deriveKey(deployerMnemonic, 0);
        address deployer = vm.addr(deployerPrivateKey);
        vm.startBroadcast(deployerPrivateKey);

	DestinationSettler settler = new DestinationSettler();
	XAccount smartWallet = new XAccount(address(settler));
    }
}
