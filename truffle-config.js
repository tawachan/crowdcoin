const HDWalletProvider = require("truffle-hdwallet-provider");
const mnemonic =
  "sail virtual sauce village useless bubble draw eternal style blade track advance";

module.exports = {
  contracts_directory: "./ethereum/contracts",
  contracts_build_directory: "./ethereum/build",
  networks: {
    development: {
      host: "127.0.0.1", // Localhost (default: none)
      port: 7545, // Standard Ethereum port (default: none)
      network_id: "5777", // Any network (default: none)
      gas: 4600000
    },
    ropsten: {
      provider: function() {
        return new HDWalletProvider(
          mnemonic,
          "https://ropsten.infura.io/v3/c9d4a737b3d94da7b3db093c42a1094a"
        );
      },
      network_id: 3,
      gas: 500000
    }
  },
  mocha: {},
  compilers: {
    solc: {
      version: "0.5.2" // Fetch exact version from solc-bin (default: truffle's version)
    }
  }
};
