// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.1 <0.9.0;


import "@openzeppelin/contracts/access/Ownable.sol";
 struct Details {
        string student_id;
        address student_add;
        bool isVerified; 
        string ipfsHash; // stores hash returned by ipfs
    }
contract signature is Ownable {
   
    mapping(address => Details) public studentsmapping;
    Details[] public student;
    Details public stud;
     bytes32 ret;
     event log(string student_id,
       bytes sign,
        bool isVerified);

    function GetHash(string memory std_id, address std_add)
        public
        onlyOwner 
       returns(bytes32)
    {
        stud.student_id = std_id;
        stud.student_add = std_add;    
        ret= keccak256(abi.encodePacked(std_id, std_add));
        return keccak256(abi.encodePacked(std_id, std_add));

    }

    function getEthHash(bytes32 message_hash) public pure returns (bytes32) {
        return
            keccak256(
                abi.encodePacked(
                    "\x19Ethereum Signed Message:\n32",
                    message_hash
                )
            );
    }

    function verify(
        address signer,
        string memory std_id,
        address std_add,
        bytes memory sign,
        string memory ipfsHash
    ) public   returns (bool) {
        bytes32 message_hash = GetHash(std_id, std_add);
        bytes32 ethsignedhash = getEthHash(message_hash);
        stud.isVerified = recover(ethsignedhash, sign) == signer;
        stud.ipfsHash = ipfsHash;
        studentsmapping[std_add]=stud;
        student.push(stud);
        emit log(std_id, sign ,stud.isVerified);
        return stud.isVerified;
    }
        
    function recover(bytes32 ethsignedhash, bytes memory sign)
        public
        pure
        returns (address)
    {
        (bytes32 r, bytes32 s, uint8 v) = split(sign);
        return ecrecover(ethsignedhash, v, r, s);
    }

    function split(bytes memory sign)
        internal
        pure
        returns (
            bytes32 r,
            bytes32 s,
            uint8 v
        )
    {
        require(sign.length == 65, "invalid signature length");
        assembly {
            r := mload(add(sign, 32))
            s := mload(add(sign, 64))
            v := byte(0, mload(add(sign, 96)))
        }
    }

    function checkDegreeStatus(string memory std_id)
        public
        view 
        returns (string memory)
    {
        
        require(
            keccak256(abi.encodePacked(stud.student_id)) ==
                keccak256(abi.encodePacked(std_id)) &&
                stud.isVerified == true,
            "Not verified"
        );
        return "Verified";
    }

    function getAllStudentInfo() external view returns(Details[] memory) {
        return student;
    }

}
