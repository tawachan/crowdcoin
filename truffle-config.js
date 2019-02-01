module.exports = {
  contracts_directory: "./ethereum/contracts",
  contracts_build_directory: "./ethereum/build",
  networks: {
    development: {
      host: "127.0.0.1", // Localhost (default: none)
      port: 7545, // Standard Ethereum port (default: none)
      network_id: "5777", // Any network (default: none)
      gas: 4600000
    }
  },
  mocha: {},
  compilers: {
    solc: {
      version: "0.5.2" // Fetch exact version from solc-bin (default: truffle's version)
    }
  }
};
