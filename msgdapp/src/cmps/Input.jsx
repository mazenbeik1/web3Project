import { useState } from "react";
import { Button, InputGroup,Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


const Input = (props) => {
    
    const [msg,setMsg] = useState("");
    const navigate = useNavigate();

    const send = async ()=>{
        if(props.account == ""){
            navigate("/signup")
            alert("METAMASK NOT CONNECTED")
        }else{
            const contract = await props.connectContract();
            await contract.sendMessage(msg);
            console.log(await contract.getMessages())
        }
    }

    return ( 
        <>
            <InputGroup className="mb-3">
                <Form.Control
                placeholder="Type your message"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                onChange={(e)=>setMsg(e.target.value)}
                />
                <Button variant="secondary" id="button-addon2" style={{marginLeft:"5px"}} onClick={send}>
                Button
                </Button>
            </InputGroup>
        </>
     );
}
 
export default Input;