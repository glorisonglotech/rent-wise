const express = require('express');
const dotenv =  require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

dotenv.config();
const port = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(express.json());

app.listen(port,()=>{
    connectDB();
    console.log(`server is running from port https://localhost:${port}`)
})