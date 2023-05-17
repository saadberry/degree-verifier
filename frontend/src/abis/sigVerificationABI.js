export const contractABI = [
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "std_id",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "ipfsHash",
          "type": "string"
        }
      ],
      "name": "addStudentDetails",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "string",
          "name": "student_id",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "bytes",
          "name": "sign",
          "type": "bytes"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "isVerified",
          "type": "bool"
        }
      ],
      "name": "Log",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "string",
          "name": "student_id",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "bytes",
          "name": "sign",
          "type": "bytes"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "isVerified",
          "type": "bool"
        }
      ],
      "name": "log",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getAllStudentInfo",
      "outputs": [
        {
          "components": [
            {
              "internalType": "bool",
              "name": "isVerified",
              "type": "bool"
            },
            {
              "internalType": "string",
              "name": "ipfsHash",
              "type": "string"
            }
          ],
          "internalType": "struct Signature.Details[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "message_hash",
          "type": "bytes32"
        }
      ],
      "name": "getEthHash",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "ethsignedhash",
          "type": "bytes32"
        },
        {
          "internalType": "bytes",
          "name": "sign",
          "type": "bytes"
        }
      ],
      "name": "recover",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "stud",
      "outputs": [
        {
          "internalType": "bool",
          "name": "isVerified",
          "type": "bool"
        },
        {
          "internalType": "string",
          "name": "ipfsHash",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "students",
      "outputs": [
        {
          "internalType": "bool",
          "name": "isVerified",
          "type": "bool"
        },
        {
          "internalType": "string",
          "name": "ipfsHash",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "name": "studentsmapping",
      "outputs": [
        {
          "internalType": "bool",
          "name": "isVerified",
          "type": "bool"
        },
        {
          "internalType": "string",
          "name": "ipfsHash",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function" 
        
    }
];

