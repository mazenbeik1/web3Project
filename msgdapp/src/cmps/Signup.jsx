import { useEffect, useState } from "react";
import { Button, Form, FloatingLabel, Card } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Signup = (props) => {

    const [username,setUsername] = useState("")
    const createAccount = props.createAccount;
    const navigate = useNavigate();

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
                                    
                                <Button className='secondaryBtn' variant="primary" onClick={()=>props.createAccount(username)}>Signup</Button>
                            </form>
                        </Card.Body>
                        <Card.Text>or</Card.Text>
                        <Button className='secondaryBtn' variant="secondary" onClick={async()=>{await props.connectAccount(); navigate("/")}}>Connect</Button>
                        {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                </Card>



                
                {/* <img src='/images/index.jpg' className="App-img" alt="logo" /> */}
                </div>
        </>
     );
}
 
export default Signup;