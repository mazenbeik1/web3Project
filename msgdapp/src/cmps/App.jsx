import { useEffect, useState } from 'react'
import { ethers } from 'ethers'
import Signup from './Signup'
import Web3Modal from 'web3modal'
import { MsgDappAddress,MsgDappABI } from '../consts/consts'
import { Button } from 'react-bootstrap'
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import Chat from './Chat'
// import { useNavigate } from 'react-router-dom'

function App() {

	const [msgs,setMsgs] = useState([
		{sender:"mzmz", time:"1684266046", data:"Hello world"}, 
		{sender:"mzmz", time:"1684266047", data:"Hello world2"},
	])

	const [account,setAccount] = useState("")
	const [contract,setContract] = useState(null);

	const connectContract = async()=>{
		try{
			const web3modal = new Web3Modal();
			const connection = await web3modal.connect();
			const prov = new ethers.providers.Web3Provider(connection);
			const signer = prov.getSigner();
			const contract = new ethers.Contract(MsgDappAddress, MsgDappABI, signer)
			console.log(contract)

			setContract(contract);
			return contract;
		}catch(err){
			console.log("Couldnt connect Contract\n"+err)
			return 1;
		}
	}


	// const send = async (msg)=>{
	// 	try{
		
	// 		if(props.account == ""){
	// 			navigate("/signup")
	// 			alert("METAMASK NOT CONNECTED")
	// 		}else{
	// 			const contract = await props.connectContract();
	// 			await contract.sendMessage(msg);
	// 			let allMsgs = await contract.getMessages();
	// 			console.log("ALL MESSAGES: \n   "+allMsgs)
	// 			let newMsgs= [];
	// 			allMsgs.map((i)=>{
	// 				newMsgs.push({sender:i[0],time:i[1],data:i[2]})
	// 			})
	// 			setMsgs(newMsgs)
					
	// 		}	
	// 	}catch(err){
	// 		console.log(err)
	// 	}
	// }
	// const initMsgs = async()=>{
	// 	const contract = await connectContract();
	// 	let allMsgs = await contract.getMessages();
	// 	setMsgs(allMsgs)
	// }
	// useEffect(()=>{
	// 	// initMsgs()
	// },[])

return (
	<>
		<Router>
				<div className="bkgrd">
			<Routes>
					<Route exact path='/signup' element={<Signup account={account} connectContract={connectContract} setAccount={setAccount}/>} />
					<Route exact path='/' element={<Chat connectContract={connectContract} account={account} msgs={msgs}/>} />
			</Routes>

				</div>
		</Router>

	</>
	)
}

export default App
