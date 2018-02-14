//Using version 0.20.4 of web3

//Ropsten contact address: https://ropsten.etherscan.io/address/0x74db632d8a68d70e19b4cef55a946f8435963a0e


var abiRemix = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "_username",
				"type": "string"
			}
		],
		"name": "addUser",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_username",
				"type": "string"
			}
		],
		"name": "authenticate",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "bytes32"
			}
		],
		"name": "users",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "updateUser",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	}
]

var contractData = "0x6060604052341561000f57600080fd5b6103378061001e6000396000f300606060405260043610610062576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806318b8275a14610067578063aa613b2914610095578063cea6ab98146100db578063f26aa48814610142575b600080fd5b341561007257600080fd5b61009360048080359060200190820180359060200191909192905050610157565b005b34156100a057600080fd5b6100c160048080359060200190820180359060200191909192905050610235565b604051808215151515815260200191505060405180910390f35b34156100e657600080fd5b6101006004808035600019169060200190919050506102d6565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561014d57600080fd5b610155610309565b005b6000828260405180838380828437820191505092505050604051809103902090506000806000836000191660001916815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415156101d757600080fd5b33600080836000191660001916815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505050565b600080838360405180838380828437820191505092505050604051809103902090503373ffffffffffffffffffffffffffffffffffffffff16600080836000191660001916815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415156102cb57600080fd5b600191505092915050565b60006020528060005260406000206000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b5600a165627a7a723058205f062956cdb7e0cba32e18661914948fed587860fbdec54ed8a44603090032010029"
var myAccount = web3.eth.accounts[0];
var MyContract = web3.eth.contract(abiRemix);


// deploy new contract
var contractInstance = MyContract.new({ from: myAccount,data: contractData, gas: 1000000},function(err,success){
  if (err) console.log(err);
  else console.log(success);
});
