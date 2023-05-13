import connection from '../db/connect_mysql.js'

//User object create
class User {
    constructor(user) {
        this.name        = user.name,
        this.email    = user.email,
        this.password = user.password,
        this.token    = user.token,
        this.type     = user.type,
        this.created_at  = new Date()
        this.updated_at  = new Date()
    }

    static async findOne(email, result) {
        connection.query("SELECT * FROM users WHERE email = ?", email, (err, res) => {
            if (err) {
                console.log("error: ", err)
                result(err, null)
            } else {
                console.log(res)
                result(null, res[0])
            }
        })
    }
}

export default User