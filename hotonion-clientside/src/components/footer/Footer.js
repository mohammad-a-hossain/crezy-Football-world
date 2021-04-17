import React from 'react'
import { Container,Nav,Card,Button} from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import logofooter from '../../logo2.png'

 const Footer = () => {
    return (
        <Container fluid className="bg-dark">
        <Container className='d-flex flex-wrap justify-content-around p-3'>
          <div style={{float:'left'}}>
            <img src={logofooter} style={{width:'200px',textAlign:'left'}} alt="cart pic"></img>
          </div>
          <div>
            <ul >
              <li style={{color:'white'}}>this is a li element </li>
              <li style={{color:'white'}}>this is a li element </li>
              <li style={{color:'white'}}>this is a li element </li>
              <li style={{color:'white'}}>this is a li element </li>
              <li style={{color:'white'}}>this is a li element </li>
              <li style={{color:'white'}}>this is a li element </li>
            </ul>
          </div>
          <div>
          <ul>
              <li>this is a li element </li>
              <li>this is a li element </li>
              <li>this is a li element </li>
              <li>this is a li element </li>
              <li>this is a li element </li>
              <li>this is a li element </li>
            </ul>
          </div>
     
        </Container>
        <Container>
        <Nav className="justify-content-end p-3" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Privacy policy</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Terms of Use</Nav.Link>
        </Nav.Item>
        <Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Pricing</Nav.Link>
        </Nav.Item>
        </Nav.Item>
      </Nav>
      </Container>
      </Container>
    )
}
export default Footer