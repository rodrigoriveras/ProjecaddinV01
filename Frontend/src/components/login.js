import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { getData01, user01, getData02, usernamesent, passwordsent } from "../office-document";

const Login = props => {

  const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");

  const onChangeUsername = e => {
   const username = e.target.value;
   setUsername(username);
   }

  const onChangePassword = e => {
   const password = e.target.value;
   setPassword(password);
   }

  const login = () => {
   props.login({username: username, password: password});
   props.history.push('/');
   }

    // const userstring = getData01().toString;
  // const userstring = "rodrigoriveras";  esto funciono

  // const { user01 } = require("../office-document");

return(

  <Container>


   <Form>
    <Form.Group className="mb-3">
     <Form.Label>Username</Form.Label>
      <Form.Control
             type="text"
             placeholder="Enter username"
             value={username}
      onChange={onChangeUsername}
    />
   </Form.Group>
   <Form.Group className="mb-3">
    <Form.Label>Password</Form.Label>
     <Form.Control  
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={onChangePassword}
    />
     </Form.Group>
   <Button variant="primary" onClick={login}>
    Login
   </Button>
     
   {/* <Button variant="primary" onClick={() => setUsername(getData01)(username)}>
    Get01--- {getData01}- 
    <getData01 />  
   </Button>   
    <Button variant="primary" onClick={() => (setUsername(usernamesent)) (setPassword(passwordsent))}>
     Get02 ;  
   </Button>    */}

  </Form>
 </Container>

 
)
}

export default Login ;
