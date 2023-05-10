//require('./db/connect_mongo')

const express = require("express");
const app = express();
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect_mysql')

const port = 3000

const start = async () => {
	try {
		await connectDB()
		app.listen(port, function () {
			console.log(`listening on port ${port}...`);
		});		
	} catch (error) {
		console.log(error)
	}
}

app.use('/api/v1/tasks', tasks)

start()
