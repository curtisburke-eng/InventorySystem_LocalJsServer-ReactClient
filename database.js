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

export async function getBadges() {                                             // GET all badges
    const [rows] = await pool.query("SELECT * FROM badges;")
    return rows
}

export async function getBadge(size, color, model) {                                 // GET badges by color
    const [rows] = await pool.query(`
    SELECT * 
    FROM badges
    WHERE 
    size_mm = ?
    AND color = ?
    AND model = ?
    `,[size, color, model])
    return rows
}

export async function getBadgesBySize(size) {                                   // GET badges by size
    const [rows] = await pool.query(`
    SELECT * 
    FROM badges
    WHERE size_mm = ?
    `,[size])
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

export async function updateBadgeQty(size, color, model, count_onHand,count_onOrder) {                                             // GET all badges
    const [rows] = await pool.query(`
    UPDATE badges 
    SET
    count_onHand = ?,
    count_onOrder = ?
    WHERE
    size_mm = ?
    AND color = ?
    AND model = ?
    `,[count_onHand,count_onOrder, size, color, model ])
    return rows
}