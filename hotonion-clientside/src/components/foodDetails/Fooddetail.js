import React from 'react'
import { useParams } from 'react-router'
import { useState } from 'react'
import { Button} from 'react-bootstrap';


 const Fooddetail = () => {
    
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
     const {key} = useParams()
     const breakfDetails= [...breakfast]

     const [seeFood,setSeeFood]= useState(breakfDetails)
     //console.log(seeFood)

     const foodbreak =seeFood.find(brk => brk.key ===key)
     //console.log(foodbreak)
    //  useEffect(() => {
    //      fetch('BreakfastFood'+key)
    //      .then(res => res.json())
    //      .then(data =>console.log(data)
    //         /* setSeeFood(data) */)
    //  }, [key])
     const {title,price,description,imgUrl} = foodbreak
     const [newquantity,setQuantity] =useState(1)
     //console.log(title)
    return (
        <div className='container d-flex p-4 mb-4'>
            <div>
                  <h1>{title}</h1>
            <h6>{description}</h6>
             <h4>${price}</h4> <button onClick={()=>setQuantity(newquantity +1) }>plus</button> {newquantity} <button onClick={()=>setQuantity(newquantity - 1)}>minus</button><br></br><br></br>
             <Button  style={{float:'left'}} variant="success">add to cart</Button>
            </div> 
            <div>
                <img src={imgUrl} style={{width:'500px',height:'500px'}} alt="food"/>
            </div>
           
        </div>
    )
}
export default Fooddetail