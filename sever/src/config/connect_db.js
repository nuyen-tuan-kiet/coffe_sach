const mysql = require('mysql2');
const dotenv = require('dotenv')
require('dotenv').config()


// sử dụng kết nối  pool thay vì kết nối thường nhằm hiệu năng
const connection_db = mysql.createPool({
    host: process.env.host || 9000,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database,
    waitForConnections: true,
    connectionLimit: 10,
    maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
    idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
    queueLimit: 0
  });


  connection_db.getConnection( function(err) {
    if (err) throw err;
    console.log("Connected!");
  })

  


  module.exports = {connection_db}