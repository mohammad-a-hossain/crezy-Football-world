import React from 'react'
import { Card,Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

 const Breakfast = (props) => {
    // console.log(props)

     const {title,imgUrl,description,price,key}= props.breakfast
   
   
    return (
        <Card style={{ width: '18rem',margin:'20px' }} >
        <Card.Img variant="top" src={imgUrl}  alt="cart pic"/>
        <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
            {description}
            </Card.Text>
            price-${price} <hr></hr>
          <Link to={"/foodDetails/"+key} >details</Link> 
        {/*  <Button  style={{float:'right'}} variant="success">add to cart</Button> */}
        </Card.Body>
        </Card>
    )
}
export default Breakfast