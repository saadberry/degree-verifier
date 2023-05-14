// EXPRESS CONNECTION
const express = require('express')
const bodyparser = require('body-parser');
const users_collection1 = require('./models/userData')
const path = require('path');
const mongoose = require('mongoose')
const { createProxyMiddleware } = require('http-proxy-middleware');
const cors = require('cors');
// require('./userdatabase/mongoose_connection')


const app = express();

app.use(cors({
  origin: 'http://localhost:3000'
}));

// Register your proxy middleware
app.use(
  '/api',
  createProxyMiddleware({
    target: 'http://localhost:8000',
    changeOrigin: true,
  })
);

app.use(bodyparser.urlencoded({

    extended:true
})
)

app.use(express.json())
let mainfolder =path.join(__dirname,"./");
app.get('/',(req, res)=>{
    res.send('home page');
    console.log(__dirname)
    console.log(mainfolder)
})
const PORT = 8000
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

app.use(express.static('public'));

app.get('/register',(req,res)=>{
    res.sendFile(mainfolder+"/index.html")
})

// creating a new record
app.post("/register",async (req,res)=>{
    console.log(req.body);
    let req_userdata =new users_collection1(req.body);
    console.log(req_userdata);
    
    try {
      await req_userdata.save();
      res.send('Registered successfully!');
    } catch (error) {
      res.send('Unable to register');
      console.log(error)
    }
    
})

//retrieving users
app.get('/users', async (req, res) => {
  try {
    const users = await users_collection1.find()
    res.json(users)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})


//verifying degree
app.post("/verify", async (req, res) => {
  try {
    const { rollnumber, url } = req.body;

    const extractedUrl = Array.isArray(url) ? url[0] : url;
    // Query the database to find the student by roll number
    const student = await users_collection1.findOne({ rollnumber });

    if (!student) {
      return res.status(404).json({ error: 'Student not found' });
    }

    // Update the student record
    student.url = extractedUrl;
    student.isVerified = true;
    await student.save();

    res.json({ message: 'Student record updated successfully' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'An error occurred' });
  }
})

//mongo connection

const { MongoClient } = require("mongodb");

// Connection URI
const uri = "mongodb://0.0.0.0:27017";

// Create a new MongoClient
const client = new MongoClient(uri);

async function run() {
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();

    // Establish and verify connection
    // await client.db("studentData").command({ ping: 1 });
    mongoose.connect('mongodb://localhost/student-data', { useNewUrlParser: true });

    console.log("Connected successfully to server");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
