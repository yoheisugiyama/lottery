const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
  'long combine resist mutual grace amount soft typical warrior display eight chat',
  'https://goerli.infura.io/v3/06cc02bfa8a94c5c86a6a3f10074d81d',
    // 'https://sepolia.infura.io/v3/06cc02bfa8a94c5c86a6a3f10074d81d'
);
const web3 = new Web3(provider);

const deploy = async () => {
  // this is going to get all of the unlocked accounts from HDWalletProvider (external test network), instead of the ganache local network
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode })
    .send({ gas: '1000000', from: accounts[0] });

  console.log(interface);
  console.log('Contract deployed to', result.options.address);
  provider.engine.stop();
};
deploy();
