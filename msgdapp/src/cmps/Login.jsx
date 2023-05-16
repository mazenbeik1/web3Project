import { Button } from "react-bootstrap";

const Login = (props) => {
    return ( 
        <>
            <Button onClick={props.get} variant="primary">get</Button>
            <Button onClick={props.connect} variant="primary">Connect</Button>
        </>
     );
}
 
export default Login;