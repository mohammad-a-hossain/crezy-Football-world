const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')



const app =express()
app.use(cors())
app.use(bodyParser.json())
const users=["aaron",'suhel','abid','adhin','azoa','manha'];
const rootCall=(req,res)=>{
res.send('welcome to server side now node mon')
}

app.get('/',(req,res)=>{
    const fruit={
        product:'orange',
        price:222,
        color:'orangeColor'
    }
    res.send(fruit)
})
//post
app.post('/adduser',(req,res)=>{
    
    //save database     
    const user =req.body;
      user.id =11; 
    /* console.log('data received',req.body) */
    res.send(user);
})
app.get('/fruit/banana',(req,res)=>{
    res.send({fruitName:'banana',quantity:10,price:1000})
})

app.get('/users/:id', (req,res)=>{
    const id= req.params.id 
    const name =users[id]
    res.send({id,name})
})


app.listen(5000,()=> console.log('listening to the port of 5000'))
