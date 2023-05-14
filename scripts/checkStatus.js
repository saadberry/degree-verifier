const { ethers } = require('hardhat');

async function main() {
  // Load the contract's artifacts (ABI and address)
  const contractArtifacts = await ethers.getContractFactory('signature');
  const contractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3'; // Replace with the actual deployed address

  // Connect to the deployed contract
  const contract = contractArtifacts.attach(contractAddress);

  // Use contract methods to retrieve the contract status
  const studentId = '19k1378'
//   const isVerified = await contract.checkDegreeStatus(studentId);
const provider = new ethers.providers.JsonRpcProvider('http://127.0.0.1:8545/')  
const code = await provider.getCode('0x5FbDB2315678afecb367f032d93F642f64180aa3')
  console.log('Is Verified:', code);
}

// Call the async function
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
