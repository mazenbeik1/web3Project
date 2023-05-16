import { useState } from 'react'
import { ethers } from 'ethers'
import Login from './Login'
import Web3Modal from 'web3modal'
// import 
// import { Web3Provider } from '@web3-react/core';
import { MsgDappAddress,MsgDappABI } from '../consts/consts'
import { Button } from 'react-bootstrap'

function App() {

	const [provider,setProvider] = useState("")
	const [account,setAccount] = useState("")
	const [isConnected, setIsConnected] = useState("false")
	const [contractState,setContractState] = useState(null);

	const getAccount = async ()=>{
		try{
			if(!window.ethereum){
				return console.log("MetaMask installation required")
			}

			const accounts = await window.ethereum.request({
				method: "eth_accounts",
			})
			
			
			setAccount(accounts[0]);
			console.log(accounts[0]);
			return accounts[0];
		} catch(err){
			console.log(err)
		}
	}

	const connectAccount = async ()=>{
		try{
			if(!window.ethereum){
				return console.log("MetaMask installation required")
			}

			const accounts = await window.ethereum.request({
				method: "eth_requestAccounts",
			})
			
			
			setAccount(accounts[0]);
			console.log(accounts[0]);
			return accounts[0];
		} catch(err){
			console.log(err)
		}
	}

	// const handleWalletChange

	const fetchContract = async (signer)=>{
		console.log("here")
		// data =await new ethers.Contract(MsgDappABI, MsgDappAddress, signer);
		return data;
	}

	const getUsers = async()=>{
		const users = await contractState.getAllUsers();
		console.log(users)
	}

	const connectContract = async()=>{
		try{
			const web3modal = new Web3Modal();
			const connection = await web3modal.connect();
			// const prov = new ethers.BrowserProvider(connection);
			const prov = new ethers.providers.Web3Provider(connection);
			const signer = prov.getSigner();
			// const contract = fetchContract(signer);
			const contract = new ethers.Contract(MsgDappAddress, MsgDappABI, signer)
			console.log(contract)
			// await contract.createAccount.send("mzmz")
			// await contract.createAccount("react");
			// const users = await contract.getAllUsers();
			// console.log(users)

			setContractState(contract);
			
			return contract;

			// const contract = new web3.eth.Contract(MsgDappABI, MsgDappAddress);
			// console.log("deon")
			// return contract;

			// const prov = new ethers.providers.Web3Provider(window.ethereum);
			// await provider.send("eth_requestAccounts",[]);
			// const signer = provider.getSigner();
			// const contractInstance = new ethers.Contract(MsgDappABI, MsgDappAddress, signer);
			// const userList = await contractInstance.getAllUsers();
			// console.log(userList)
		}catch(err){
			console.log(err)
		}
	}

	const createAccount = async ()=>{
		try{

			const web3modal = new Web3Modal();
				const connection = await web3modal.connect();
				// const prov = new ethers.BrowserProvider(connection);
				const prov = new ethers.providers.Web3Provider(connection);
				const signer = prov.getSigner();
				// const contract = fetchContract(signer);
				const contract = new ethers.Contract(MsgDappAddress, MsgDappABI, signer)
			await contract.createAccount("react");
		} catch(err){
			console.log(err)
		}
	}

	const converTime = (time)=>{
		const newTime = new Date(time.toNumber());

		const realTime = newTime.getHour() + '/' + newTime.getMinutes + '/' + newTime.getSeconds() + '	Date:' + newTime.getDate() + "/" + (newTime.getMonth()+1) + '/' + newTime.getFullYear();
		return realTime;
	}

return (
	<>
		{/* <Login get={getWallet} connect={connectWallet}/> */}
		
		<Button value={"primary"} onClick={connectContract}>Connect Contract</Button>
		<Button value={"primary"} onClick={connectAccount}>Connect Account</Button>
		<Button value={"primary"} onClick={getAccount}>Get Account</Button>
		<Button value={"primary"} onClick={createAccount}>Create account</Button>
		<Button value={"primary"} onClick={getUsers}>Get Users</Button>

	</>
	)
}

export default App
