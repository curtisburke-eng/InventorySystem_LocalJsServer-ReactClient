/*
*
*
*
*/

// Use Express to Create a HTTP Server
import express from 'express'
const app = express()
app.use(express.json()) // any json http body will be accepted and passed into the req.body object

// Use Enviroment vars for easy updating
import dotenv from 'dotenv'
dotenv.config()

// Get functions from database server
import {getBadges, getAllBadges, getBadgesBySize, getBadgesByColor, getBadgesByModel, updateBadgeQty} from './database.js'

// --- Get Request Routes ---
// GET all badges
app.get("/badges", async (req,res) => {
    if (req.headers['content-length'] != null) {                // If there is information in the body of the request
        const {size_mm, color, model} = req.body                // Extract that info
        const badges = await getBadges(size_mm, color, model)   // Use that info for the query
        res.status(201).send(badges)
    }
    else {
        const badges = await getAllBadges()
        res.send(badges)
    }
})

// GET badges by size
app.get("/badges/bySize", async (req,res) => {
    const {size_mm} = req.body
    console.log(req.headers['content-length'])
    const badges = await getBadgesBySize(size_mm)
    res.status(201).send(badges)

})

// GET badges by color
app.get("/badges/byColor", async (req,res) => {
    const {color} = req.body
    const badges = await getBadgesByColor(color)
    res.status(201).send(badges)
})

// GET badges by model
app.get("/badges/byModel", async (req,res) => {
    const {model} = req.body
    const badges = await getBadgesByModel(model)
    res.status(201).send(badges)
})

// ------- PUT Request Routes -------
// Update All badges

// Update single badge
app.put("/badges", async (req,res) => {
    const {size, color, model, count_onHand, count_onOrder} = req.body
    const badges = await updateBadgeQty(size, color, model, count_onHand,count_onOrder)
    res.status(201).send(badges)
})


// Error Handling
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
  })

app.listen(process.env.PORT,() => {
    console.log(`Server is running on port ${process.env.PORT}`)
})