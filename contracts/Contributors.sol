//SPDX-License-Identifier: MIT

pragma solidity ^0.8.10;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract Contributors is ERC721 {
    
    //verifier => contributor => IpfsHash
    mapping(address => mapping(address => string)) public waitingForConfirmation;

    //Contributor => registrar
    mapping(uint => address) public contributorVerifier;

    //embe

    
    

    constructor(string memory name, string memory symbol) 
         ERC721(name, symbol) {
            
         }
}
