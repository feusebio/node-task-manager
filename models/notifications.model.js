import connection from '../db/connect_mysql.js'

//Notification object create
class Notification {
    constructor(notification) {
        this.name        = notification.name,
        this.description = notification.description,
        this.created_at  = new Date()
        this.updated_at  = new Date()
    }
    static create(newNotification, result) {
        connection.query("INSERT INTO notifications SET ?", newNotification, (err, res) => {
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
        connection.query("SELECT * FROM notifications WHERE ID = ?", id, (err, result) => {
            if (err) {
                console.log("error: ", err)
                result(err, null)
            } else {
                result(null, res.id)
            }
        })
    }
    static findAll(result) {
        connection.query("SELECT * FROM notifications", (err, res) => {
            if (err) {
                console.log("error: ", err)
                result(err, null)
            } else {
                console.log('notifications: ', res)
                result(null, res)
            }
        })
    }
}

export default Notification