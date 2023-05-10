const mongoose = require('mongoose')

const connectionString = 

mongoose.connect(connectionString)
    .then(
        () => console.log('CONNECTED TO DB...')
    ).catch(
        (err) => console.log(err)
    )