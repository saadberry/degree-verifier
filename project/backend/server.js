// EXPRESS CONNECTION
const express = require('express')
const bodyparser = require('body-parser');
const users_collection1 = require('./models/userData')
const path = require('path');
// require('./userdatabase/mongoose_connection')


const app = express();

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
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

app.use(express.static('public'));

app.get('/register',(req,res)=>{
    res.sendFile(mainfolder+"/index.html")
})
app.post("/register",(req,res)=>{
    console.log(req.body);
    let req_userdata =new users_collection1(req.body);
    console.log(req_userdata);
    
     req_userdata.save();
     res.send('Registered Successfully')
})


// const express = require('express');

// // create new express app and save it as "app"
// const app = express();

// // server configuration
// const PORT = 8000;

// // create a route for the app
// app.get('/', (req, res) => {
//   res.send('Hello World');
// });

// // create a route for the app
// app.get('/studentData', (req, res) => {
//     res.send('Student Data to be displayed here:');
//   });

// // make the server listen to requests
// app.listen(PORT, () => {
//   console.log(`Server running at: http://localhost:${PORT}/`);
// });


// const express = require('express')
// const app = express();
// const PORT = 8000
// app.listen(PORT, () => {
//     console.log('server online!')
// })


// // create a route for the app
// app.get('/', (req, res) => {
//     res.send('Hello World');
//   });
  


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
    await client.db("myuserdata").command({ ping: 1 });
    console.log("Connected successfully to server");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
