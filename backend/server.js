require("dotenv").config();
const express = require('express');
const connectDB = require('./config/db');
const productsRoutes = require('./routes/productRoutes');

connectDB();

const app = express();

app.use(express.json());

app.use('/api/products', productsRoutes)


const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>
    console.log(`Server is live on ${PORT}`)
)

// "test": "echo \"Error: no test specified\" && exit 1",
// myFirstDatabase