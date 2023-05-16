const Message = (props) => {
    return ( 
        <>
            <div className="Message">

                <h4>{props.data}</h4>
                <p>{props.sender} at {props.time}</p>
            </div>
            <br />
        </>
     );
}
 
export default Message;