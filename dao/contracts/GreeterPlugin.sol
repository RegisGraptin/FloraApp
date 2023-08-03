// SPDX-License-Identifier: UNLICENSED 
pragma solidity ^0.8.0;

// https://aragon.org/how-to/build-a-dao-plugin-using-aragon-osx
// https://devs.aragon.org/docs/osx/
// https://devs.aragon.org/docs/osx/how-to-guides/plugin-development/

import {Plugin, IDAO} from '@aragon/osx/core/plugin/Plugin.sol';

contract GreeterPlugin is Plugin {
  constructor(IDAO _dao) Plugin(_dao) {}

  function greet() external pure returns (string memory) {
    return 'Hello world!';
  }
}
