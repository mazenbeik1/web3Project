import { useState } from "react";
import { Button, InputGroup,Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


const Input = (props) => {
    
    const [msg,setMsg] = useState("");
    const navigate = useNavigate();

    return ( 
        <>
            <InputGroup className="mb-3">
                <Form.Control
                placeholder="Type your message"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                onChange={(e)=>setMsg(e.target.value)}
                />
                <Button variant="secondary" id="button-addon2" style={{marginLeft:"5px"}} onClick={()=>{props.send(msg)}}>
                SEND
                </Button>
            </InputGroup>
        </>
     );
}
 
export default Input;