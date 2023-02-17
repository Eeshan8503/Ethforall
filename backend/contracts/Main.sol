//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
contract Main {
struct User {
        bytes signingKey;
        string name;
    }

    mapping(address => User) private users;

    function setUser(address _userAddress, bytes memory _signingKey, string memory _name) public {
        users[_userAddress] = User(_signingKey, _name);
    }

    function getUser(address _userAddress) public view returns (bytes memory, string memory) {
        return (users[_userAddress].signingKey, users[_userAddress].name);
    }

}
