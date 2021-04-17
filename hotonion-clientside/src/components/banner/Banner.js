import React from 'react'
import background from '../../bannerbackground.png'
import { Container} from 'react-bootstrap';

 const Banner= () => {
    return (
        <Container fluid >
        <img className="img-fluid"   src={background} alt="background"/>
       <div style={{position:'relative',top:'0',left:'0',marginTop:'-20%',marginBottom:'20%',zIndex:'1'}}>
         <input style={{width:'400px',padding:'10px',borderRadius:'20px'}} type='text'></input>
        <input style={{padding:'10px'}} type='button' value='Search'></input>
       </div>
      </Container>
    )
}
export default Banner