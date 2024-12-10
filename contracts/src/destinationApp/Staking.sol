pragma solidity ^0.8.0;

import {SafeERC20} from "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract Staking {
    using SafeERC20 for IERC20;

    IERC20 public immutable token;

    mapping(address => uint256) public userStakes;

    constructor(IERC20 _token) {
        token = _token;
    }

    function stake(uint256 amount) external {
        stakeFor(msg.sender, amount);
    }

    function stakeFor(address user, uint256 amount) public {
        userStakes[user] += amount;
        token.safeTransferFrom(user, address(this), amount);
    }

    function withdraw(uint256 amount) external {
        userStakes[msg.sender] -= amount;
        token.safeTransfer(msg.sender, amount);
    }
}
