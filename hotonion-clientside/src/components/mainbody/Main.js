import React, { useState } from 'react'
import { Container} from 'react-bootstrap';
import BreakfastFood from '../foodBreakfast/BreakfastFood'
// import Lunch from '../lunch/Lunch'
// import Dinner from '../dinner/Dinner'

 const Main = () => {
     const [selectFood,setSelectFood] = useState([])
          
    const breakfast = [
        {
            title: 'breakfast food one',
            description: 'Standard Single Rooms are designed in open.',
            imgUrl: 'https://i.ibb.co/jrgpSst/breakfast1.png',
            quantity: 1,
            category: 'breakfast',
            key: '1',
            price: 119
        },
        {
            title: 'breakfast food two',
            description: 'traveling couples or friends.',
            imgUrl: 'https://i.ibb.co/425rf0B/breakfast2.png',
            quantity: 1,
            category: 'breakfast',
            key: '2',
            price: 110
        },
        {
            title: 'breakfast food three',
            description: 'traveling couples or friends.',
            imgUrl: 'https://i.ibb.co/h98L5BF/breakfast3.png',
            quantity: 1,
            category: 'breakfast',
            key: '3',
            price: 110
        },
        {
            title: 'breakfast food four',
            description: 'traveling couples or friends.',
            imgUrl: 'https://i.ibb.co/XWfnYgD/breakfast4.png',
            quantity: 1,
            category: 'breakfast',
            key: '4',
            price: 120
        },
        {
            title: 'breakfast food five',
            description: 'traveling couples or friends.',
            imgUrl: 'https://i.ibb.co/cTyShf5/breakfast5.png',
            quantity: 1,
            category: 'breakfast',
            key: '5',
            price: 120
        },
        {
            title: 'breakfast food six',
            description: 'traveling couples or friends.',
            imgUrl: 'https://i.ibb.co/L8jWJDh/breakfast6.png',
            quantity: 1,
            category: 'breakfast',
            key: '6',
            price: 130
        }
    ]
     
  /*   const addFoods=(breakfas)=>{
      const newSelectedFood= [...breakfast,breakfas]
      setSelectFood(newSelectedFood)
        console.log(selectFood)
    } */
   
    return (
        <Container className='d-flex flex-wrap justify-content-center p-3'>
   
           {
                breakfast.map(breakfas => <BreakfastFood key={breakfas.key} breakfast={breakfas} ></BreakfastFood>)
            }
         {/*  btn={addFoods} */}

           {/*  <Button>checkout all foods</Button> */}
  </Container>
    )
}
export default Main








/* const lunch = [
        {
            title: 'lunch food one',
            description: 'Standard Single Rooms are designed in open.',
            imgUrl: 'https://i.ibb.co/nBRzPMF/lunch1.png',
            quantity: 1,
            category: 'lunch',
            key: '7',
            price: 119
        },
        {
            title: 'lunch food two',
            description: 'traveling couples or friends.',
            imgUrl: 'https://i.ibb.co/HtzCWmX/lunch2.png',
            quantity: 1,
            category: 'lunch',
            key: '8',
            price: 110
        },
        {
            title: 'lunch food three',
            description: 'traveling couples or friends.',
            imgUrl: 'https://i.ibb.co/LSgxnVT/lunch3.png',
            quantity: 1,
            category: 'lunch',
            key: '9',
            price: 110
        },
        {
            title: 'lunch food four',
            description: 'traveling couples or friends.',
            imgUrl: 'https://i.ibb.co/k6vWdcn/lunch4.png',
            quantity: 1,
            category: 'lunch',
            key: '10',
            price: 120
        },
        {
            title: 'lunch food five',
            description: 'traveling couples or friends.',
            imgUrl: 'https://i.ibb.co/FDfrzxs/lunch5.png',
            quantity: 1,
            category: 'lunch',
            key: '11',
            price: 120
        },
        {
            title: 'lunch food six',
            description: 'traveling couples or friends.',
            imgUrl: 'https://i.ibb.co/9VNTKnN/lunch6.png',
            quantity: 1,
            category: 'lunch',
            key: '12',
            price: 130
        }
    ] 
   
    const dinner = [
        {
            title: 'dinner food one',
            description: 'Standard Single Rooms are designed in open.',
            imgUrl: 'https://i.ibb.co/kcwXB2M/dinner1.png',
            quantity: 1,
            category: 'dinner',
            key: '13',
            price: 119
        },
        {
            title: 'dinner  food two',
            description: 'traveling couples or friends.',
            imgUrl: 'https://i.ibb.co/0Zfmngn/dinner2.png',
            quantity: 1,
            category: 'dinner',
            key: '14',
            price: 110
        },
        {
            title: 'dinner  food three',
            description: 'traveling couples or friends.',
            imgUrl: 'https://i.ibb.co/JmqnhdN/dinner3.png',
            quantity: 1,
            category: 'dinner',
            key: '15',
            price: 110
        },
        {
            title: 'dinner  food four',
            description: 'traveling couples or friends.',
            imgUrl: 'https://i.ibb.co/0ypH6g7/dinner4.png',
            quantity: 1,
            category: 'dinner',
            key: '16',
            price: 120
        },
        {
            title: 'dinner  food five',
            description: 'traveling couples or friends.',
            imgUrl: 'https://i.ibb.co/mHC1Bzz/dinner5.png',
            quantity: 1,
            category: 'dinner',
            key: '17',
            price: 120
        },
        {
            title: 'dinner food six',
            description: 'traveling couples or friends.',
            imgUrl: 'https://i.ibb.co/RPP7RVK/dinner6.png',
            quantity: 1,
            category: 'dinner',
            key: '18',
            price: 130
        }
    ] */



 {/*   {
                lunch.map(lunch => <Lunch key={lunch.key} lunch={lunch}></Lunch>)
            }  
             {
                dinner.map(dinner=> <Dinner key={dinner.key} dinner={dinner}></Dinner>)
            }  */}

/* 
 
 <Card style={{ width:'18rem',margin:'20px' }}>
 <Card.Img variant="top" src={food} alt="cart pic"  />
 <Card.Body>
   <Card.Title>Card Title</Card.Title>
   <Card.Text>
     Some quick example 
   </Card.Text>
  {/*  <Button variant="primary">Go somewhere</Button> */
 //</Card.Body>
//</Card>

//   <Card style={{ width:'18rem',margin:'20px'  }}>
//  <Card.Img variant="top" src={food} alt="cart pic"  />
//  <Card.Body>
//    <Card.Title>Card Title</Card.Title>
//    <Card.Text>
//      Some quick example 
//    </Card.Text>
  {/*  <Button variant="primary">Go somewhere</Button> */}
//  </Card.Body>
// </Card>

//   <Card style={{  width:'18rem',margin:'20px'  }}>
//  <Card.Img variant="top" src={food} alt="cart pic"  />
//  <Card.Body>
//    <Card.Title>Card Title</Card.Title>
//    <Card.Text>
//      Some quick example 
//    </Card.Text>
//   {/*  <Button variant="primary">Go somewhere</Button> */}
//  </Card.Body>
// </Card>

//   <Card style={{  width:'18rem',margin:'20px' }}>
//  <Card.Img variant="top" src={food} alt="cart pic"  />
//  <Card.Body>
//    <Card.Title>Card Title</Card.Title>
//    <Card.Text>
//      Some quick example 
//    </Card.Text>
//   {/*  <Button variant="primary">Go somewhere</Button> */}
//  </Card.Body>
// </Card>

//   <Card style={{  width:'18rem',margin:'20px'  }}>
//  <Card.Img variant="top" src={food} alt="cart pic"  />
//  <Card.Body>
//    <Card.Title>Card Title</Card.Title>
//    <Card.Text>
//      Some quick example 
//    </Card.Text>
//   {/*  <Button variant="primary">Go somewhere</Button> */}
//  </Card.Body>
// </Card> */