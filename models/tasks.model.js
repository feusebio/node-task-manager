

import connection from '../db/connect_mysql.js'
// const connectDB = require('../db/connect_mysql')

//Task object create
class Task {
    constructor(task) {
        this.name = task.name,
        this.description = task.description
    }
    static create(newTask, result) {
        query("INSERT INTO tasks SET ?", newTask, (err, result) => {
            if (err) {
                console.log("error: ", err)
                result(err, null)
            } else {
                console.log(res.insertId)
                result(null, res.insertId)
            }
        })
    }
    static findById(id, result) {
        query("SELECT * FROM tasks WHERE ID = ?", id, (err, result) => {
            if (err) {
                console.log("error: ", err)
                result(err, null)
            } else {
                result(null, res.insertId)
            }
        })
    }
    static findAll(result) {
        connection.query("SELECT * FROM tasks", (err, result) => {
            if (err) {
                console.log("error: ", err)
                result(err, null)
            } else {
                console.log('tasks: ', res)
                result(null, res.insertId)
            }
        })
    }
}




export default Task