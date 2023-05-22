import { useEffect, useState } from "react";
import Message from "./Message";
import { Button, InputGroup,Form } from "react-bootstrap";
import Input from "./Input";
import { useNavigate } from "react-router-dom";


const Chat = (props) => {
        const [msgs,setMsgs] = useState([
            {sender:"mzmz", time:"1684266046", data:"Hello world"}, 
            {sender:"mzmz", time:"1684266047", data:"Hello world2"},
        ])

        const navigate = useNavigate();

        const send = async (msg)=>{
            if(props.account == ""){
                navigate("/signup")
                alert("METAMASK NOT CONNECTED")
            }else{
                const contract = await props.connectContract();
                await contract.sendMessage(msg);
                let allMsgs = await contract.getMessages();
                console.log("ALL MESSAGES: \n   "+allMsgs)
                let newMsgs= [];
                allMsgs.map((i)=>{
                    newMsgs.push({sender:i[0],time:i[1],data:i[2]})
                })
                setMsgs(newMsgs)
                
            }
        }

        const converTime = (time)=>{
            const newTime = new Date(time);
    
            // const realTime = newTime.getHour() + '/' + newTime.getMinutes + '/' + newTime.getSeconds() + '	Date:' + newTime.getDate() + "/" + (newTime.getMonth()+1) + '/' + newTime.getFullYear();
            
            let [hour, minute, second] = new Date()
            .toLocaleTimeString("en-US")
            .split('/');
            
            return hour;
        }

        const initMsgs = async()=>{
            const contract = await props.connectContract();
            let allMsgs = await contract.getMessages();
            console.log(allMsgs)
            let newMsgs= [];
            allMsgs.map((i)=>{
                newMsgs.push({sender:i[0],time:i[1],data:i[2]})
            })
            setMsgs(newMsgs)
        }
        useEffect(()=>{
            initMsgs()
        },[])

    return ( 
        <>
            
            <div className="Chat">

                {msgs.map((msg)=>{
                    return <Message sender={msg.sender} time={converTime(msg.time)} data={msg.data}/>
                })}
            </div>
            <div className="Input"><Input account={props.account} connectContract={props.connectContract} send={send}/></div> 

            {/* <Button onClick={()=>navigate("/signup")} variant="warning">SIGNUP</Button> */}
        </>
     );
}
 
export default Chat;