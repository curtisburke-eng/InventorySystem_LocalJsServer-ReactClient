import mysql from 'mysql2'

const pool = mysql.createPool({
    // host: process.env.MYSQL_HOST,
    // user: process.env.MYSQL_USER,
    // password: process.env.MYSQL_PASSWORD,
    // database: process.env.MYSQL_DATABASE
    host: '127.0.0.1',
    user: 'web',
    password: 'test',
    database: 'KEEL_Inventory'
}).promise()

const [rows] = await pool.query("SELECT * FROM badges;")
console.log(rows)