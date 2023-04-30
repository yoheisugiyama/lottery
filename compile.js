
// This is going to set the path of where Lottery.sol is located. 'Path' is a node standard library module
const path = require("path");

//  'fs' is also a node standard library module. it is going to read the contents of a file.
const fs = require("fs");

// this is simply requiring the solidity compiler
const solc = require("solc");

//dirname is used in node as well, and it sets the root directory of the project
const lotteryPath = path.resolve(__dirname, "contracts", "Lottery.sol");

// this is going to read the source code of Lottery.sol
const source = fs.readFileSync(lotteryPath, "utf8");

// solc.compile(source, 1) means we are compiling 1 contract. If it is 2 contracts it would be solc.compile(source, 2) 

module.exports = solc.compile(source, 1).contracts[":Lottery"];
