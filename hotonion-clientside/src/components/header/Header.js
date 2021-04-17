import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import { Container,Nav} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import logo from '../../logo2.png'
import{Link
} from "react-router-dom";

 const Header = () => {
    return (
        <Container className='p-3'>
        <Navbar>
        <Navbar.Brand to="/home">
          <Link to="/home"><img src={logo} style={{height:'50px'}} alt='logo'/> </Link> 
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          
          <Nav.Item>
          <Link to="/cart">
          <FontAwesomeIcon icon={faCartPlus } />
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/login">Login</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/signup">Sign-up</Link>
        </Nav.Item>
        </Navbar.Collapse>
      </Navbar>
        </Container>
    )
}
export default Header