var HDWalletProvider = require("truffle-hdwallet-provider");

var infura_apikey = "Your Infura Key";
var mnemonic = "Your wallet mnemonics";

module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      provider: new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/"+infura_apikey),
      network_id: 4
    },
    ropsten: {
      provider: new HDWalletProvider(mnemonic, "https://ropsten.infura.io/"+infura_apikey),
      network_id: 3
    },
    mainnet: {
      provider: new HDWalletProvider(mnemonic, "https://mainnet.infura.io/"+infura_apikey),
      network_id: 1
    },
    solc: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};