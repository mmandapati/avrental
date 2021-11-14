const mysql = require('mysql');
const myPort = 3306;
const pool = mysql.createPool({
    connectionLimit: 100,
    host: 'cmpe281group6.clqyaakkwpfa.us-east-2.rds.amazonaws.com',
    user: 'root',
    port: myPort,
    password: 'Password12345',
    database: 'group6'
});

pool.getConnection((err) => {
    if(err){
     console.log("failed to connect")
    }
    else{
        console.log("connected to mysql database");
    }
  });
  
module.exports = pool;