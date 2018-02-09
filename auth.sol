pragma solidity ^0.4.19;

contract Auth {

    //Do we need a struct for users?

    mapping (bytes32 => address) public users;

    function addUser(string _username) external {
        //Check if string is positive length and not zero too?
        //Is it a problem one address can have multiple usernames?
        bytes32 userKey = keccak256(_username);
        require(users[userKey] == 0);
        users[userKey] = msg.sender;
    }

    //Do we need this?
    function updateUser(){}

    function authenticate(string _username) external view returns(bool) {
        bytes32 userKey = keccak256(_username);
        require(users[userKey] == msg.sender);
        return true;
    }

}
