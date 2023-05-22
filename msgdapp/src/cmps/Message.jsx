const Message = (props) => {
    return ( 
        <>
            <div className="Message">

                <h4>{props.data}</h4>
                <br />
                <p>{props.sender}</p>
            </div>
            <br />
        </>
     );
}
 
export default Message;