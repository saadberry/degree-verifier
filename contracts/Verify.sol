// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;
// Uncomment this line to use console.log
import "hardhat/console.sol";

contract Verify {
    // // Some string type variables to identify the token.
    // string public name = "My Hardhat Token";
    // string public symbol = "MHT";
    

    //     // The fixed amount of tokens, stored in an unsigned integer type variable.
    // uint256 public totalSupply = 1000000;

    // // An address type variable is used to store ethereum accounts.
    // address public owner;

    // // A mapping is a key/value map. Here we store each account's balance.
    // mapping(address => uint256) balances;

    // // The Transfer event helps off-chain applications understand
    // // what happens within your contract.
    // event Transfer(address indexed _from, address indexed _to, uint256 _value);

    // /**
    //  * Contract initialization.
    //  */
    // constructor() {
    //     // The totalSupply is assigned to the transaction sender, which is the
    //     // account that is deploying the contract.
    //     balances[msg.sender] = totalSupply;
    //     owner = msg.sender;
    // }

    //struct details
    struct Details  {
        bytes8 student_id; // student id. eg. 19k-1378
        // address student_address; // address of student 
        // bool degree_status; // true -> degree verified ( and vice-versa )
        string signature; // signature of uni
        bool exists; // bool value that corresponds to creation of a record
        // bool dues_cleared; // dues cleared or not
        // uint cgpa; // since we cannot use float in solidity, we will only be checking if cgpa > 2
    }

    // mapping a `Details` struct for each possible address
    mapping(address => Details) public details;

    //mapping signature to address
    mapping(string=> address) getAddressFromSignature;

    //function setDetails that sets details from JS
    function setDetails(bytes8 _studentid,  string memory _signature) public {
        // Details memory  d = Details(_studentid,_signature, false);
        details[msg.sender].student_id = _studentid;
        details[msg.sender].signature = _signature;

        // details[msg.sender] = d; // mapping address of user with data
        getAddressFromSignature[details[msg.sender].signature] = msg.sender;
        // if student id && signature not empty, set 'exists' to true
        // if (keccak256(d.student_id) != keccak256("") && d.signature != ""){
        //     d.exists = true;
        // }
        
        // d.student_id = _studentid;
        // d.student = _student;
        
    }
    // console.log(d);
    //function to check degree status
    // takes address of student as parameter
    // queries 

    //if contract has data of student &&
    // signature of uni
    // then the degree of the student is verified
    function checkDegreeStatus(address _address) public returns(string memory){
        // Details memory d = Details(_studentid);
        // address = details[d._studentid];

        // return  getAddressFromSignature[address];

        // string memory sig = details[_address].signature;
        // if record exists & signature is not empty 
        if(details[_address].exists && keccak256(bytes(details[_address].signature)) != keccak256(bytes(""))){
            return "Verified"; 
        }

        else{
            return "Not yet verified"; 
        }

        // if(d[signature].exists){
        //     return "Verified"; 
        // }
        // else{
        //     "Not Yet Verified";
        // }
        
        

    }
    // event Withdrawal(uint amount, uint when);

    // constructor(uint _unlockTime) payable {
    //     require(
    //         block.timestamp < _unlockTime,
    //         "Unlock time should be in the future"
    //     );

    //     unlockTime = _unlockTime;
    //     owner = payable(msg.sender);
    // }

    // function withdraw() public {
    //     // Uncomment this line, and the import of "hardhat/console.sol", to print a log in your terminal
    //     // console.log("Unlock time is %o and block timestamp is %o", unlockTime, block.timestamp);

    //     require(block.timestamp >= unlockTime, "You can't withdraw yet");
    //     require(msg.sender == owner, "You aren't the owner");

    //     emit Withdrawal(address(this).balance, block.timestamp);

    //     owner.transfer(address(this).balance);
    // }
}