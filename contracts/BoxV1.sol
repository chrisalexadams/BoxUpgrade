//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

contract BoxV1 is Initializable {
  uint public length;
  uint public width;

  function initialize(uint _length, uint _width) public initializer {
    length = _length;
    width = _width;
  }
}
