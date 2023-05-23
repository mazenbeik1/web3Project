

// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;

contract MsgDapp{

    struct user{
        string name;
        address pubkey;
    }

    struct message{
        address sender;
        uint256 timestamp;
        string msg;
    }

    user[] allUsers;
    message[] allMessages;

    mapping(address => user) userList;
    function checkUserExists(address pubkey) public view returns(bool){
        return bytes(userList[pubkey].name).length > 0;
    }

    //CREATE ACCOUNT
    function createAccount(string calldata name) external {
        require(checkUserExists(msg.sender) == false, "User already exists");
        require(bytes(name).length>0, "Username cannot be empty");

        userList[msg.sender].name = name;

        allUsers.push(user(name, msg.sender));
    }

    //GET ALL MESSAGES
    function getMessages() external view returns(message[] memory){

        return allMessages;
    }

    function getAllUsers() external view returns(user[] memory){

        return allUsers;
    }

    function test() public pure returns(string memory){
        return "hello world";
    }

    function sendMessage(string calldata _msg) external{
        require(checkUserExists(msg.sender), "Create an account first");
        
        // memory username = userList[msg.sender].name;

        message memory newMsg = message(msg.sender, block.timestamp, _msg);
        allMessages.push(newMsg);
    }
    
}