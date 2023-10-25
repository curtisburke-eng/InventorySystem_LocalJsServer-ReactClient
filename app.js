/*
*
*
*
*/

// Use Express to Create a HTTP Server
import express from 'express'
const app = express()
app.use(express.json())

// Use Enviroment vars for easy updating
import dotenv from 'dotenv'
dotenv.config()

// Get functions from database server
import {getBadges, getBadgesBySize, getBadgesByColor, getBadgesByModel} from './database.js'

// --- Get Request Routes ---
// GET all badges
app.get("/badges", async (req,res) => {
    const badges = await getBadges()
    res.send(badges)
})

// GET badges by size
app.get("/badges/21", async (req,res) => {
    const badges = await getBadgesBySize(21)
    res.send(badges)
})
app.get("/badges/22", async (req,res) => {
    const badges = await getBadgesBySize(22)
    res.send(badges)
})
app.get("/badges/24", async (req,res) => {
    const badges = await getBadgesBySize(24)
    res.send(badges)
})

// GET badges by color
app.get("/badges/uncoated", async (req,res) => {
    const badges = await getBadgesByColor("uncoated")
    res.send(badges)
})
app.get("/badges/black", async (req,res) => {
    const badges = await getBadgesByColor("black")
    res.send(badges)
})
app.get("/badges/red", async (req,res) => {
    const badges = await getBadgesByColor("red")
    res.send(badges)
})
app.get("/badges/blue", async (req,res) => {
    const badges = await getBadgesByColor("blue")
    res.send(badges)
})
app.get("/badges/rose", async (req,res) => {
    const badges = await getBadgesByColor("rose")
    res.send(badges)
})

// GET badges by Model
app.get("/badges/standard", async (req,res) => {
    const badges = await getBadgesByModel("standard")
    res.send(badges)
})
app.get("/badges/XL", async (req,res) => {
    const badges = await getBadgesByModel("XL")
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