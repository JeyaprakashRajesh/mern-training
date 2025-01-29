const express=require('express');
const path=require('path');
const mdb=require('mongoose');
const dotenv=require('dotenv');
const Signup=('./models/signupSchema.js')
const bcrypt =require('bcrypt');
const cors =require('cors');

const app=express();
dotenv.config();
app.use(express.json());
app.use(cors())
mdb
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("conntected");
  })
  .catch((e) => {
    console.log("not conntected");
  });
app.get("/static", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});
app.get("/", (req, res) => {
  res.send("Welcome to backend my friend...\n this is backend process area");
});
app.post("/signup", async (req, res) => {
  var { firstname, lastname, email, password } = req.body;
  var hashedpassword= await bcrypt.hash(password,10)
  console.log(req.body);
  try {
    const newCustomer = new Signup({
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: hashedpassword,
    });
    newCustomer.save();
    console.log(newCustomer);
    res.status(201).send("signup is successfull");
  } catch (error) {
    res.status(401).send("signup unsuccessful", error);
  }
});
app.get('/getssignupdet',async (req,res)=>{
    var signUpdet=await Signup.find();
    res.status(200).json(signUpdet);
})

app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
      const user = await Signup.findOne({ email });
      if (!user) {
        return res.status(404).send("User not found!");
      }
      if (await bcrypt.compare(password, user.password)) {
        return res.status(401).send("Invalid credentials!");
      }
      res.status(200).send("Login successful!");
    } catch (error) {
      console.error("Login error:", error);
      res.status(500).send("Error during login");
    }
  });

  app.put('/updateuser', async (req, res) => {
    const { id, ...updates } = req.body; 
  
    try {
      const updatedUser = await Signup.findByIdAndUpdate(id, updates, { new: true });
      if (!updatedUser) {
        return res.status(404).send("User not found");
      }
      res.status(200).send("User details updated successfully");
    } catch (err) {
      res.status(500).send("Error updating user details");
    }
  });
  
  
  app.delete('/deleteuser', async (req, res) => {
    const { id } = req.body; 
  
    try {
      const deletedUser = await Signup.findByIdAndDelete(id);
      if (!deletedUser) {
        return res.status(404).send("User not found");
      }
      res.status(200).send("User deleted successfully");
    } catch (err) {
      res.status(500).send("Error deleting user");
    }
  });
app.listen(3001,()=>{
    console.log("My Server Started");
}); 