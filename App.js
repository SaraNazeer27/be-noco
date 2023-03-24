const express = require('express');
 
// Creating express object
const app = express();
const cors = require('cors');
app.use(cors());
const mongoose = require('mongoose');
const mongourl = "mongodb+srv://login:Ulfath+123@cluster0.dhuj3ry.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(mongourl, {useNewUrlParser: true

}).then(() => {console.log("connection successful")}).catch((err) => console.log(err));


// Define User schema
const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
  });
  
  // Create User model
  const User = mongoose.model('User', userSchema);
  
  // Middleware to parse JSON
  app.use(express.json());
  
  // Route handler for signup form submission
  app.post('/signup', async (req, res) => {
    const { firstName, lastName, email, password } = req.body;
    try {
    
     // Check if email already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: 'Email already exists' });
    }
    // Create new user
    const newUser = new User({ firstName, lastName, email, password });
    
    // Save the user to the database
    await newUser.save();

    // Return a success response
    return res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error' });
  }
});




 
// Handling GET request
app.get('/', (req, res) => {
    res.send('A simple Node App is '
        + 'running on this server')
    res.end()
})
 
// Port Number
const PORT = process.env.PORT ||3001;
 
// Server Setup
app.listen(PORT,console.log(
  `Server started on port ${PORT}`));




