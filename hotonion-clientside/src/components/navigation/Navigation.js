import React from 'react'
import { Container,Nav} from 'react-bootstrap';
import{Link
} from "react-router-dom";


 const Navigation = () => {
    return (
        <Container>
        <Nav variant="tabs" className="justify-content-center" defaultActiveKey="/home">
        <Nav.Item>
          <Link to="/breakfast">Breakfast</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/lunch">Lunch</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/dinner">Dinner</Link>
        </Nav.Item>
        
      </Nav>
        </Container>
    )
}
export default Navigation