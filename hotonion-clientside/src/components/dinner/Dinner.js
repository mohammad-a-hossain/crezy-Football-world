import React from 'react'
import { Card} from 'react-bootstrap';

 const Dinner = (props) => {
   
        const {title,imgUrl,description,price}= props.dinner
    console.log(title)
    return (
        <Card style={{ width: '18rem',margin:'20px' }} >
        <Card.Img variant="top" src={imgUrl}  alt="cart pic"/>
        <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
            {description}
            </Card.Text>
        {/*  <Button variant="primary">Go somewhere</Button> */}
        {price}
        </Card.Body>
        </Card>
    )
    
}
export default Dinner