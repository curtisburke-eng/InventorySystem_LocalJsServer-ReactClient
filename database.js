import mysql from 'mysql2'

const conn = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    user: process.env.MYSQL_DATABASE
}).promise()