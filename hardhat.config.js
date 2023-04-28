require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  solidity: "0.8.17",
  networks: {
    localganache: {
      url: "HTTP://127.0.0.1:7545",
      accounts: [`0x${'0a5951b39acaab43fa9f2e5c189fdba6c93a7be9e8b48c5d4e9b7a360c27c1a6'}`]
    }
  }
};