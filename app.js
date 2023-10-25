/*
*
*
*
*/

// Use Express to Create a HTTP Server
import express from 'express'
const app = express()

// Use Enviroment vars for easy updating
import dotenv from 'dotenv'
dotenv.config()

// Get functions from database server
import {getBadges} from './database.js'

// Get Request Routes
app.get("/badges", async (req,res) => {
    const badges = await getBadges()
    res.send(badges)
})

// Error Handling
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
  })

app.listen(process.env.PORT,() => {
    console.log(`Server is running on port ${process.env.PORT}`)
})