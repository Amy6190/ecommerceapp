const express = require('express');
const app = express();
const mongoose = require('./config/db')
const cors = require('cors');
const productRoutes = require('./routes/productroutes')
app.use(cors());
app.use(express.json());
app.use('/uploads',express.static('uploads'));

app.use('/api/products',productRoutes);
app.get('/',(req,res)=>{
    res.send("node is running");
})

app.listen(5000,()=>{
    console.log('app listening on port 8080');
});