/*
*
*
*
*/

// Use SQL library for connecting & querying
import mysql from 'mysql2'

// Use Enviroment vars for easy updating
import dotenv from 'dotenv'
dotenv.config()

// Create a pool of connections - rather than having a different connection used for each query
const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
}).promise()

// Create the SQL statements used in the GET requests

export async function getAllBadges() {                                             // GET all badges
    const [rows] = await pool.query("SELECT * FROM badges ORDER BY size_mm ASC, model ASC, color ASC;")
    return rows
}

export async function getBadges(size_mm, color, model) {                                 // GET badges by color
    const [rows] = await pool.query(`
    SELECT * 
    FROM badges
    WHERE 
    size_mm = ?
    AND color = ?
    AND model = ?
    `,[size_mm, color, model])
    return rows
}

export async function getBadgesBySize(size_mm) {                                   // GET badges by size
    const [rows] = await pool.query(`
    SELECT * 
    FROM badges
    WHERE size_mm = ?
    `,[size_mm])
    return rows
}

export async function getBadgesByColor(color) {                                 // GET badges by color
    const [rows] = await pool.query(`
    SELECT * 
    FROM badges
    WHERE color = ?
    `,[color])
    return rows
}

export async function getBadgesByModel(model) {                                 // GET badges by color
    const [rows] = await pool.query(`
    SELECT * 
    FROM badges
    WHERE model = ?
    `,[model])
    return rows
}

// Create the SQL statements used in the PUT requests

export async function updateBadgeQty(id, count_onHand,count_onOrder) {                                             // GET all badges
    const [rows] = await pool.query(`
    UPDATE badges 
    SET
    count_onHand = ?,
    count_onOrder = ?
    WHERE
    id = ?
    `,[count_onHand,count_onOrder, id])
    return rows
}