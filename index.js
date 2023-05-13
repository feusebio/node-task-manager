import express from "express";
const app = express();
import tasks from './routes/tasks.routes.js';
import users from './routes/users.routes.js';
import connectDB from './db/connect_mysql.js';
import auth from './middleware/auth.js'

const port = 3000

const start = async () => {
	try {
		// await connectDB()
		app.listen(port, function () {
			console.log(`listening on port ${port}...`);
		});		
	} catch (error) {
		console.log(error)
	}
}

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api/v1/tasks', auth, tasks)
app.use('/api/v1/users', users)

start()
