const express = require('express');
const bcrypt = require('bcrypt');
// Creating express object
const app = express();
const cors = require('cors');
app.use(cors());


//connect to mongodb
const mongoose = require('mongoose');
const mongourl = "mongodb+srv://login:Ulfath+123@cluster0.dhuj3ry.mongodb.net/?retryWrites=true&w=majority";


mongoose.connect(mongourl, { useNewUrlParser: true }).then(() => {
  console.log('connection successful');
}).catch((err) => {
  console.error('Error connecting to MongoDB:', err.message);
  process.exit(1);
});


// // Define User schema
const userSchema = new mongoose.Schema({
     name: { type: String, required: true },
     email: { type: String, required: true, unique: true },
     password: { type: String, required: true },
    confirmPassword: { type: String, required: true }
   });
  
  // Create User model
  const User = mongoose.model('User', userSchema);
  
  // Middleware to parse JSON
  app.use(express.json());
  
  // Api for signup
  app.post('/api/signup', async (req, res) => {
    try {
      // Check if user already exists
      const existingUser = await User.findOne({ email : req.body.email });
      if (existingUser) {
        return res.status(400).json({ message: 'Email already exists' });
      }
      
      // Save the user to the database
      await new User({...req.body}).save();
  
      // Return a success response
      return res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Server error' });
    }
  });

//Api for login
  app.post("/api/auth", async (req, res) => {
    try {
      const user = await User.findOne({ email: req.body.email });
      if (!user)
        return res.status(401).send({ message: "Invalid Emai" });
  
     
        if (user.password !== req.body.password) {
          return res.status(401).send({ message: "Invalid Password" });
        }
    
  
      res.status(200).send({ message: "logged in successfully" });
    } catch (error) {
      res.status(500).send({ message: "Internal Server Error" });
    }
  });
 
// Port Number
const PORT = process.env.PORT ||3001;
 
// Server Setup
app.listen(PORT,console.log(
  `Server started on port ${PORT}`));

  // //forgot password api
  // app.post("/api/forgotpassword", async (req, res) => {
  //   const{email}=req.body;
  //   try {
  //     const oldUser = await User.findOne({email });
  //     if (!oldUser)
  //       return res.send("user not Exist");
  //   } 
  //   const secret = JWT_SECRED + oldUser.password;
  //   const token = jwt.sign({emai: oldUser.email,id: oldUser._id},secret,{expiresIn: "1h",
  // }); 
  // const link=
  //  } catch (error) {}
  // });




