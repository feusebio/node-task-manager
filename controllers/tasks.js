const getAllTasks = (req,res) => {
    res.send('get all tasks...')
    connectDB.query('SELECT * FROM tasks', (err,rows) => {
        if(err) throw err;
      
        console.log('Data received from Db:');
        console.log(rows);
      });
}

const createTask = (req,res) => {
    res.json(req.body)
}

const getTask = (req,res) => {
    res.json({id:req.params.id})
}

const updateTask = (req,res) => {
    res.send('update task')
}

const deleteTask = (req,res) => {
    res.send('delete task')
}

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}