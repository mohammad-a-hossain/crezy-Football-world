import React from 'react'
import { Container,Nav,Card,Button} from 'react-bootstrap';
import food1 from '../../food1.png'

const Secondmain = () => {
    return (
        <Container fluid className='d-flex flex-wrap justify-content-center'>
        {/* --------------- */}
      <Card style={{  width:'30rem',margin:'20px'  }}>
      <Card.Img variant="top" src={food1} alt="cart pic"  />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example 
        </Card.Text>
        <Button variant="primary">See More</Button>
      </Card.Body>
    </Card>
    {/* --------------- */}
       {/* --------------- */}
       <Card style={{ width:'30rem',margin:'20px'  }}>
      <Card.Img variant="top" src={food1} alt="cart pic"  />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example 
        </Card.Text>
        <Button variant="primary">See More</Button>
      </Card.Body>
    </Card>
    {/* --------------- */}
       {/* --------------- */}
       <Card style={{ width:'30rem',margin:'20px'   }}>
      <Card.Img variant="top" src={food1} alt="cart pic"  />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example 
        </Card.Text>
         <Button variant="primary">See More</Button>
      </Card.Body>
    </Card>
    {/* --------------- */}
      </Container>
    )
}
export default Secondmain