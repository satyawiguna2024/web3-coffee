// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Coffee {
    uint256 totalCoffe;
    address payable public owner; // address owner bisa menerima sebuah mata uang / (ETH)

    constructor() payable {
        owner = payable(msg.sender);
    }

    // melakukan log terhadap Coffe
    event NewCoffee (
        address indexed from,
        uint256 timeStamp,
        string message,
        string name
    );

    // variable costume
    struct Transaction {
        address sender;
        string message;
        string name;
        uint256 timestamp;
    }


    // variable yang beranama coffes yang bertype berupa transaction berupa array
    // index 0: [0x783hudwh, Hello There, Cokda, timestamp]
    // index 1: [0x89hdw, I Like This!, Banjarmasin, timestamp]
    Transaction[] coffees;

    function getAllCoffee() public view returns(Transaction[] memory) {
        return coffees;
    }

    function getTotalCoffee() public view returns(uint256) {
        return totalCoffe;
    }

    function buyCoffee(string memory _message, string memory _name) public payable {
        require(msg.value >= 0.01 ether, "Harus Kirim Minimal 0.01 Ether");

        totalCoffe += 1;
        coffees.push(Transaction({
            sender: msg.sender,
            message: _message,
            name: _name,
            timestamp: block.timestamp
        }));

        (bool success, ) = owner.call{value: msg.value}("");
        require(success, "Gagal Mengirim Ether ke Owner");

        emit NewCoffee(msg.sender, block.timestamp, _message, _name);
    }

}