//require('./db/connect_mongo')

import express from "express";
const app = express();
import tasks from './routes/tasks.routes.js';
import connectDB from './db/connect_mysql.js';

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

app.use('/api/v1/tasks', tasks)

start()
