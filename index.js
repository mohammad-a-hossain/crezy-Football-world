const express = require('express')


const app =express()

const rootCall=(req,res)=>{
res.send('welcome to server side')
}

app.get('/',(req,res)=>{
    res.send('thank for calling me!!')
})
app.listen(5000,()=> console.log('listening to the port of 5000'))
