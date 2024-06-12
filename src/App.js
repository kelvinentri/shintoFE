import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Login from './Routes/Login';
import UserList from './Routes/UserList';
import Particular from './Routes/Particular';
import { Container } from 'react-bootstrap';
import { Navbar, Nav } from 'react-bootstrap';
import { Auth, LoginAuth } from './auth/authorization';



function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar bg="warning" varient="light">
          <Container>
            <Navbar.Brand href="/"> Sample Project</Navbar.Brand>
            <Nav className="float-right">
              <Nav.Link href="/">Login</Nav.Link>

            </Nav>
          </Container>
        </Navbar>
        {/* <header>
          <h1> ABC COMPANY</h1>
          <nav>
            <Link to="/"> Login</Link>
          </nav>
        </header> */}
        <Container className='pt-5'>
        <Routes>
          <Route element={<LoginAuth/>}>
          <Route index element={<Login />} />
          </Route>

<Route element={<Auth/>}> 
<Route path='usersdata' element={<UserList />} />
<Route path='usersdata/:userNo' element={<Particular />} />
 </Route>
       

        </Routes>
        </Container>
      </div>
    </BrowserRouter>
  );
}

export default App;
