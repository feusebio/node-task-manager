const mysql = require('mysql')
require("dotenv").config({ path: ".env" });

let connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PW,
    db: process.env.DB_NAME
});

const connectDB = () => {
  return connection.connect((err) => {
    if (err) {
      console.error('error: ' + err.message)
    } else {
      console.log('Connected to Mysql the MySQL server.')
      let sql = "SELECT * FROM app_tasks.tasks";
      connection.query(sql, function (err, rows) {
        if (err) {
          console.log(err);
        }
        console.log(rows);
      });
    }
  })
}

module.exports = connectDB