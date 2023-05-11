import mysql from 'mysql'
import dotenv from 'dotenv'
dotenv.config({ path: ".env" })

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PW,
    database: process.env.DB_NAME
});

connection.connect((err) => {
      if(err) throw err
      console.log('Database connected!!')
    })

export default connection