import React from 'react'
import { Card} from 'react-bootstrap';
 const Lunch = (props) => {
     //console.log(props)
//      const lunch = [
//         {
//             title: 'lunch food one',
//             description: 'Standard Single Rooms are designed in open.',
//             imgUrl: 'https://i.ibb.co/nBRzPMF/lunch1.png',
//             quantity: 1,
//             category: 'lunch',
//             key: '7',
//             price: 119
//         },
//         {
//             title: 'lunch food two',
//             description: 'traveling couples or friends.',
//             imgUrl: 'https://i.ibb.co/HtzCWmX/lunch2.png',
//             quantity: 1,
//             category: 'lunch',
//             key: '8',
//             price: 110
//         },
//         {
//             title: 'lunch food three',
//             description: 'traveling couples or friends.',
//             imgUrl: 'https://i.ibb.co/LSgxnVT/lunch3.png',
//             quantity: 1,
//             category: 'lunch',
//             key: '9',
//             price: 110
//         },
//         {
//             title: 'lunch food four',
//             description: 'traveling couples or friends.',
//             imgUrl: 'https://i.ibb.co/k6vWdcn/lunch4.png',
//             quantity: 1,
//             category: 'lunch',
//             key: '10',
//             price: 120
//         },
//         {
//             title: 'lunch food five',
//             description: 'traveling couples or friends.',
//             imgUrl: 'hhttps://i.ibb.co/CHXcQ1J/lunch5.png',
//             quantity: 1,
//             category: 'lunch',
//             key: '11',
//             price: 120
//         },
//         {
//             title: 'breakfast food six',
//             description: 'traveling couples or friends.',
//             imgUrl: 'https://i.ibb.co/9VNTKnN/lunch6.png',
//             quantity: 1,
//             category: 'lunch',
//             key: '12',
//             price: 130
//         }
//     ] 
//     const lunch=[...lunch]
//    const [lunch, setLunch] =useState([lunch])
//     //console.log(lunch)
    const {title,imgUrl,description,price}= props.lunch
    //console.log(title)
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
export default Lunch