import User from '../models/users.model.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const login = async (req, res) => {
    try {
        // Get user input
      const { email, password } = req.body;
  
      // Validate user input
      if (!(email && password)) {
        res.status(400).send("All input is required");
      }
      // Validate if user exist in our database
      const user = await User.findOne(email, (err, user) => {
        if (err)
            console.log(err)
            console.log({ error:false, message:"User found successfully!", user })
            
            if (user && (bcrypt.compare(password, user.password))) {
              // Create token
              const token = jwt.sign(
                { user_id: user.id, email },
                  process.env.TOKEN_KEY,
                {
                  expiresIn: "2h",
                }
              );
        
              // save user token
              user.token = token;
        
              // user
              res.status(200).json(user);
            } else {
              res.status(400).send("Invalid Credentials")  
            }
      })
    } catch (err) {
      console.log(err);
    }
    // Our register logic ends here
}

export default {
    login
    // getTask,
    // updateTask,
    // deleteTask
}