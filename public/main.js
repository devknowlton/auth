var contractAddress = '0x74db632d8A68D70e19B4CEF55A946f8435963A0e'

var contractAbi = [
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


window.addEventListener('load', function() {

  // Checking if Web3 has been injected by the browser (Mist/MetaMask)
  if (typeof web3 !== 'undefined') {
    // Use Mist/MetaMask's provider
    window.web3 = new Web3(web3.currentProvider);
    console.log("using metamask!")
    console.log(web3.eth.accounts)
  } else {
    console.log('No web3? You should consider trying MetaMask!')
    // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
    window.web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8000"));
  }

})

$(document).ready(function(){

var myContract = web3.eth.contract(contractAbi);
  // instantiate by address
var contractInstance = myContract.at(contractAddress);

function authenticate(username){
  contractInstance.authenticate(username,function(err,res){
    if (err) console.log(err);
    else console.log(res);
  })
}

function addUser(username){
  contractInstance.addUser(username,function(err,success){
    if (err) console.log(err);
    else console.log(success);
  })
}


$("#loginButtonModal").click(function(){
  authenticate($("#usernamefield").val());
})

$("#addUserButton").click(function(){
  addUser($("#usernamefield").val());
})








})
