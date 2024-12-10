pragma solidity ^0.8.0;

import {Test} from "forge-std/Test.sol";
import {Staking} from "../../src/destinationApp/Staking.sol";
import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract TestableERC20 is ERC20 {
    constructor() ERC20("Test token", "TEST") {}

    function mint(address to, uint256 value) public virtual {
        _mint(to, value);
    }
}

contract StakingTest is Test {
    TestableERC20 public testToken;
    Staking public staking;
    uint256 public stakeAmount;

    function setUp() public {
        testToken = new TestableERC20();
        staking = new Staking(testToken);
        stakeAmount = 10e18;
    }

    function test_stake() public {
        testToken.mint(address(this), stakeAmount);
        testToken.approve(address(staking), stakeAmount);

        staking.stake(stakeAmount);

        uint256 stakingContractBalance = testToken.balanceOf(address(staking));
        uint256 userStake = staking.userStakes(address(this));
        assertEq(stakingContractBalance, stakeAmount);
        assertEq(userStake, stakeAmount);
    }

    function test_stakeFor() public {
        testToken.mint(address(this), stakeAmount);
        testToken.approve(address(staking), stakeAmount);

        address user = vm.createWallet("user").addr;
        staking.stakeFor(user, stakeAmount);

        uint256 stakingContractBalance = testToken.balanceOf(address(staking));
        uint256 userStake = staking.userStakes(user);
        assertEq(stakingContractBalance, stakeAmount);
        assertEq(userStake, stakeAmount);
    }

    function test_withdraw() public {
        testToken.mint(address(this), stakeAmount);
        testToken.approve(address(staking), stakeAmount);
        staking.stake(stakeAmount);

        uint256 stakingContractBalance = testToken.balanceOf(address(staking));
        uint256 userStake = staking.userStakes(address(this));
        assertEq(stakingContractBalance, stakeAmount);
        assertEq(userStake, stakeAmount);

        staking.withdraw(stakeAmount);

        uint256 userBalance = testToken.balanceOf(address(this));
        stakingContractBalance = testToken.balanceOf(address(staking));
        userStake = staking.userStakes(address(this));
        assertEq(userBalance, stakeAmount);
        assertEq(stakingContractBalance, 0);
        assertEq(userStake, 0);
    }

    function test_withdrawTo() public {
        testToken.mint(address(this), stakeAmount);
        testToken.approve(address(staking), stakeAmount);
        staking.stake(stakeAmount);

        uint256 stakingContractBalance = testToken.balanceOf(address(staking));
        uint256 userStake = staking.userStakes(address(this));
        assertEq(stakingContractBalance, stakeAmount);
        assertEq(userStake, stakeAmount);

        address recipient = vm.createWallet("recipient").addr;
        staking.withdrawTo(recipient, stakeAmount);

        uint256 recipientBalance = testToken.balanceOf(recipient);
        stakingContractBalance = testToken.balanceOf(address(staking));
        userStake = staking.userStakes(address(this));
        assertEq(recipientBalance, stakeAmount);
        assertEq(stakingContractBalance, 0);
        assertEq(userStake, 0);
    }
}
