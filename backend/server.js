const mongoose=require('mongoose')
const port=process.env.PORT;
const express=require('express')
const app=express()
const movie=require('./schema/schema')
const connection=require('./db/connection')
app.use(express.json())
const PORT=5000

const db=async()=>{
    try {
        await mongoose.connection(process.env.DB)
        res.status(200).send('connected')
    } catch (err) {
        console.log(err.message)
        res.status(500).send('internal server error')
    }
}

app.get('./',(res,req)=>{
    res.send('hello')
})
app.post('/movie',async(req,res)=>{
    const {title,director,genre,releaseYear,availableCopies}=req.body
    try {
        const newMovie=new movie(req.body)
        await movie.save()
        res.send(200).json(newMovie)
        
    } catch (error) {
        console.log(error)
        res.status(500).send('internal server error')
        
    }

})
app.get('/movie',async(req,res)=>{
    const {title,director,genre,releaseYear,availableCopies}=req.body
    try {
       const movies=await movie.find()
       res.send(200).json(movies)
        
    } catch (error) {
        console.log(error)
        res.status(500).send('internal server error')
        
    }

})
app.put('/movie/:id',async(req,res)=>{
    const {title,director,genre,releaseYear,availableCopies}=req.body
    const {id}=req.params
    try {
       const updateMovie=await movie.findByIdAndUpdate(id,req.body,{new:true})
       if(!movie){
        res.status(400).send('movie not found')
       }
        res.status(200).send(updateMovie)
    } catch (error) {
        console.log(error)
        res.status(500).send('internal server error')
        
    }

})
app.delete('/movie/:id',async(req,res)=>{
    const {title,director,genre,releaseYear,availableCopies}=req.body
    const {id}=req.params
    try {
       const deleteMovie=await movie.findByIdAndDelete(id)
       if(!movie){
        res.status(400).send('movie not found')
       }
        res.status(200).send(deleteMovie)
    } catch (error) {
        console.log(error)
        res.status(500).send('internal server error')
        
    }

})
app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`)
})

