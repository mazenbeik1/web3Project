import { useEffect, useState } from "react";
import { Button, Form, FloatingLabel, Card } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { ethers } from 'ethers'


const Signup = (props) => {

    const [username,setUsername] = useState("")
    // const createAccount = props.createAccount;
    const navigate = useNavigate();

    const createAccount = async (username)=>{
		try{
			let contract = await props.connectContract();
			await contract.createAccount(username);
			
		} catch(err){
            alert("user already exists")
			console.log(err)
		}
		await connectAccount();
	}
    
    const connectAccount = async ()=>{
        let contract = await props.connectContract();
		try{
			if(!window.ethereum){
				return console.log("MetaMask installation required")
			}

			const accounts = await window.ethereum.request({
				method: "eth_requestAccounts",
			})
			
			props.setAccount(accounts[0]);
			// try{
			// 	// await contract.checkUserExists();
			// }catch(err){
			// 	console.log(err);
			// 	props.setAccount("");
			// 	alert("User doesnt exist");
			// 	return 1;
			// }
			
			console.log(accounts[0]);
            navigate('/')
			return accounts[0];
		} catch(err){
			console.log(err)
			return 1;
		}
	}

    return ( 
        <>
            <div className="Signup" >


                <Card>
                    <Card.Header>Signup</Card.Header>
                    <Card.Body>
                        {/* <Card.Title>Special title treatment</Card.Title> */}
                        <Card.Body>
                            <form className='SignupForm' onSubmit={(e)=>e.preventDefault()} style={{color: "black"}}>

                                <FloatingLabel controlId="floatingInput" label="ENTER USERNAME" className="mb-3">
                                    <Form.Control type="text" placeholder="ENTER USERNAME" name='privateUser' value={username} onChange={(e)=>setUsername(e.target.value)}/>
                                </FloatingLabel>
                                    
                                <Button className='secondaryBtn' variant="primary" onClick={async()=> await createAccount(username)}>Connect</Button>
                            </form>
                        </Card.Body>
                        {/* <Card.Text>or</Card.Text>
                        <Button className='secondaryBtn' variant="secondary" onClick={async()=>{await connectAccount();}}>Connect</Button> */}
                        {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                </Card>



                
                {/* <img src='/images/index.jpg' className="App-img" alt="logo" /> */}
                </div>
        </>
     );
}
 
export default Signup;