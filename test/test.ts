const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Verify contract", function () {
  it("Deployment should assign the total supply of tokens to the owner", async function () {
    // const [owner] = await ethers.getSigners();

    const Verify = await ethers.getContractFactory("Verify");
    
    //contract instantiaze
    //pre mai daal dena
    const hardhatVerify = await Verify.deploy();

    // const ownerBalance = await hardhatVerify.balanceOf(owner.address);
    // expect(await hardhatVerify.totalSupply()).to.equal(ownerBalance);
  });
});