import connection from '../db/connect_mysql.js'

//Task object create
class Task {
    constructor(task) {
        this.name        = task.name,
        this.description = task.description,
        this.created_at  = new Date()
        this.updated_at  = new Date()
    }
    static create(newTask, result) {
        connection.query("INSERT INTO tasks SET ?", newTask, (err, res) => {
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
        connection.query("SELECT * FROM tasks WHERE ID = ?", id, (err, result) => {
            if (err) {
                console.log("error: ", err)
                result(err, null)
            } else {
                result(null, res.id)
            }
        })
    }
    static findAll(result) {
        connection.query("SELECT * FROM tasks", (err, res) => {
            if (err) {
                console.log("error: ", err)
                result(err, null)
            } else {
                console.log('tasks: ', res)
                result(null, res)
            }
        })
    }
}

export default Task