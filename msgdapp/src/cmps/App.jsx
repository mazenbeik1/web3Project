import { useState } from 'react'
import { ethers } from 'ethers'
import Signup from './Signup'
import Web3Modal from 'web3modal'
import { MsgDappAddress,MsgDappABI } from '../consts/consts'
import { Button } from 'react-bootstrap'
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import Chat from './Chat'

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
			const prov = new ethers.providers.Web3Provider(connection);
			const signer = prov.getSigner();
			const contract = new ethers.Contract(MsgDappAddress, MsgDappABI, signer)
			console.log(contract)

			setContractState(contract);
			
			return contract;
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
		<Router>
				<div className="bkgrd">
			<Routes>
					<Route exact path='/signup' element={<Signup createAccount={createAccount} connectAccount={connectAccount} account={account} connectContract={connectContract}/>} />
					<Route exact path='/' element={<Chat converTime={converTime} connectContract={connectContract} connectAccount={connectAccount} getAccount={getAccount} account={account}/>} />
			</Routes>

				</div>
		</Router>
		{/* <Button value={"primary"} onClick={connectContract}>Connect Contract</Button>
		<Button value={"primary"} onClick={connectAccount}>Connect Account</Button>
		<Button value={"primary"} onClick={getAccount}>Get Account</Button>
		<Button value={"primary"} onClick={createAccount}>Create account</Button>
		<Button value={"primary"} onClick={getUsers}>Get Users</Button> */}




	</>
	)
}

export default App
