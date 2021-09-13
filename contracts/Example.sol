// Deployed at 0xf49b49eB8Cd08e34E8Cded0a53632A369336e5a3
// on Kovan

pragma solidity ^0.8.0;

contract Example {
    uint public count = 10;

    function play() external {
        count--;
        if(count==0) {
            selfdestruct(payable(msg.sender));
        }
    }
}