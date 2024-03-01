import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import AddTodo from './components/add-todo';
import TodosList from './components/todos-list';
import Login from './components/login';
import Signup from './components/signup';
import TextInsertion from './components/TextInsertion';
import Table01 from './components/table01';
import insertText from './components/createtable';
import GetRange from './components/GetRange';
import Test from './components/test';


import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Navbar';

import TodoDataService from './services/todos';

function App() {
  // const user = null;

  if (typeof(window.history.pushState) !== 'function') {
    window.history.pushState = function(path){
       window.location.hash = '#!' + path;
    }
}

  const [user, setUser] = React.useState(null);
  const [token, setToken] = React.useState(null);
  const [error, setError] = React.useState('');

   async function login(user = null){ // default user to null
    TodoDataService.login(user)
     .then(response =>{
      setToken(response.data.token);
     setUser(user.username);
     localStorage.setItem('token', response.data.token);
     localStorage.setItem('user', user.username);
     setError('');
    })
    .catch( e =>{
     console.log('login', e);
      setError(e.toString());
    });
}

   async function logout(){
    setToken('');
    setUser('');
    localStorage.setItem('token', '');
     localStorage.setItem('user', '');
  }

   async function signup(user = null){ // default user to null
    TodoDataService.signup(user)
    .then(response =>{
    setToken(response.data.token);
    setUser(user.username);
    localStorage.setItem('token', response.data.token);
     localStorage.setItem('user', user.username);
    })
    .catch( e =>{
    console.log(e);
    setError(e.toString());
    })
    }

  return (
    <div className="App">
      <Navbar bg="primary" variant="dark">
        <div className="container-fluid">
          <Navbar.Brand>Todos App</Navbar.Brand>
          <Nav className="me-auto">
          <Container>
          <Link class="nav-link" to={"/table01"}>Table</Link>    
            <Link class="nav-link" to={"/todos"}>Todos</Link>
            <Link class="nav-link" to={"/createtable"}>Create</Link>
            { user ? (
              <Link class="nav-link" onClick={logout}>Logout ({user})</Link>
            ) : (
              <>
               <Link class="nav-link" to={"/login"}>Login</Link>
               <Link class="nav-link" to={"/signup"}>Sign Up</Link>   
               <Link class="nav-link" to={"/table01"}>Table</Link>   
               <Link class="nav-link" to={"/GetRange"}>Get</Link>    
               <Link class="nav-link" to={"/test"}>Test</Link>                
              </>
           )}   
          </Container>  
          <TextInsertion />
          </Nav>
        </div>
      </Navbar>

      <div className="container mt-4">
        <Switch>
          <Route exact path={["/", "/todos"]} render={(props) =>
            <TodosList {...props} token={token} />
          }>
          </Route>
            <Route path="/todos/create" render={(props)=>
           <AddTodo {...props} token={token} />
          }>
          </Route>
            <Route path="/todos/:id/" render={(props)=>
          <AddTodo {...props} token={token} />
          }>
          </Route>
            <Route path="/login" render={(props)=>
          <Login {...props} login={login} />
          }>
          </Route>
            <Route path="/signup" render={(props)=>
          <Signup {...props} signup={signup} />
          }>
          </Route>
          <Route path="/table01" render={(props)=>
          <Table01 {...props} table01={Table01} />
          }>
          </Route>    
          <Route path="/createtable" render={(props)=>
          <insertText {...props} insertText={insertText} />
          }>
          </Route>    
          <Route path="/GetRange" render={(props)=>
          <GetRange {...props} GetRange={GetRange} />
          }>
          </Route>  
          <Route path="/test" render={(props)=>
          <Test {...props} Test={Test} />
          }>
          </Route>
              
        </Switch>
      </div>


      <footer className="text-center text-lg-start
        bg-light text-muted mt-4">
        <div className="text-center p-4">
© Copyright - <a
target="_blank"
className="text-reset fw-bold text-decoration-none"
href="https:roro"
>
Roro
</a> - <a
target="_blank"
className="text-reset fw-bold text-decoration-none"
href="roro"
>
roro
</a>
</div>
</footer>


    </div>
  );
}
export default App;

