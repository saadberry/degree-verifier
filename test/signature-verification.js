const { loadFixture } = require("@nomiclabs/hardhat-ethers");

const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Contract", function () {
    

    it("Return all student info", async function () {
      const Contract = await ethers.getContractFactory("signature");
      const deployContract = await Contract.deploy();
      if(deployContract){
        console.log("Contract Successfully deployed!")
      }
      
      const sign = ethers.utils.arrayify("0x01234567890123456789012345678901234567890123456789012345678901230123456789012345678901234567890123");
;

      // Add some sample student info to the contract
      await deployContract.verify(
        "0x1234567890123456789012345678901234567890",
        "19k1378",
        "0x4E3908F7109f57E4A31c2986a8aab5C3D0b5B592",
        "0x01234567890123456789012345678901234567890123456789012345678901230123456789012345678901234567890123",
        "QmX4Qq4w79fzzQdJ6dpaWwFeFfJZ2q1hFhRv6txdrbf1fu"
      );
    //   await deployContract.verify(
    //     "<signer-address>",
    //     "19k2468",
    //     "0x8d913a45251cfe8225e084bda2ccf0b3f0c0657b",
    //     "<signature>",
    //     "<ipfsHash>"
    //   );
    
      const studentInfo = await deployContract.getAllStudentInfo();
    
      // Perform your assertions
      expect(studentInfo.length).to.equal(2); // Check the length of the returned array
      expect(studentInfo[0].student_id).to.equal("19k1378"); // Check the student_id of the first student
      expect(studentInfo[1].student_add).to.equal("0x8d913a45251cfe8225e084bda2ccf0b3f0c0657b"); // Check the student_add of the second student
    });
  });
  
  

// describe("SigVerification Contract", function (){
//     async function deployTokenFixture(){
//         const contract = await ethers.getContractFactory("signature");
//         console.log(contract)
//         const deployContract = await contract.deploy();
//         const signers = await ethers.getSigners();
//         await contract.deployed();
//         const result = await contract.GetHash('19k1378', '0x4E3908F7109f57E4A31c2986a8aab5C3D0b5B592');
//         await result.wait();
//         return {deployContract}
//     }
//     it("Should calculate the hash", async function () {
//         const { deployContract } = await loadFixture(deployTokenFixture);

//         // Replace 'std_id' and 'std_address' with actual values
//         const stdId = '19k1378';
//         const stdAddress = '0x4E3908F7109f57E4A31c2986a8aab5C3D0b5B592';
//         console.log(stdId)
//         // Call the GetHash function
//         const hash = await deployContract.GetHash(stdId, stdAddress);
      
//         // Perform your assertions
//         // Replace 'expectedHash' with the expected hash value
//         const expectedHash = '0x5a4b41a826e1b4c65a8dc1f79d8f9a37b54c6652e681be62c2912c42e0a3e98d';
 
//         expect(hash).to.equal(expectedHash);
//       });
// })