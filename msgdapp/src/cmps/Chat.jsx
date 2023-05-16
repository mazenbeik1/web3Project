import { useEffect, useState } from "react";
import Message from "./Message";
import { Button, InputGroup,Form } from "react-bootstrap";
import Input from "./Input";
import { useNavigate } from "react-router-dom";


const Chat = (props) => {
        const [msgs,setMsgs] = useState([
            {sender:"mzmz", time:"1684266045", data:"Hello woaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaarld"},
            {sender:"mzmz", time:"1684266046", data:"Hello world"}, 
            {sender:"mzmz", time:"1684266047", data:"Hello world"},
            {sender:"mzmz", time:"1684266048", data:"Hello world"},
            {sender:"mzmz", time:"1684266049", data:"Hello world"},
            {sender:"mzmz", time:"1684266040", data:"Hello world"},
            {sender:"mzmz", time:"168426601", data:"Hello world"},
            {sender:"mzmz", time:"168426602", data:"Hello world"},
            {sender:"mzmz", time:"168426603", data:"Hello world"},
            {sender:"mzmz", time:"168426604", data:"Hello world"},
            {sender:"mzmz", time:"168426605", data:"Hello world"},
            {sender:"mzmz", time:"168426606", data:"Hello world"},
            {sender:"mzmz", time:"168426608", data:"Hello world"},
        ])

        const navigate = useNavigate();

    return ( 
        <>
            
            <div className="Chat">

                {msgs.map((msg)=>{
                    return <Message sender={msg.sender} key={msg.time} data={msg.data}/>
                })}
            </div>
            <div className="Input"><Input account={props.account} connectContract={props.connectContract}/></div> 

            {/* <Button onClick={()=>navigate("/signup")} variant="warning">SIGNUP</Button> */}
        </>
     );
}
 
export default Chat;