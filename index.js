import express from 'express'
import cors from 'cors'
import apiRoutes from './routes/index.js'
import { dbInit } from './database/index.js'

const app=express()
const PORT=8080

dbInit();

app.use(express.static('public'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static("public"))

app.use(apiRoutes)

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})