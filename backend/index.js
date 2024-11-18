const express = require('express');
const app = express()
const cors = require('cors');
require ('dotenv').config()
const mongoose = require('mongoose');
//const foodModel = require('./models/foodModel');
const foodRouter = require('./routes/foodRoute');
const userRouter = require('./routes/userRoute');
const cartRouter = require('./routes/cartRoute');
const orderRouter = require('./routes/orderRoute');
const port = process.env.PORT || 4000;


// parse syntax

app.use(express.json());
app.use(cors());

// routes
app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)


app.get("/", (req,res) => {
    res.send('hello backend')
})

app.listen(port, () => {
    console.log(`backend chalne laga hai port par ${port}`)
    mongoose.connect(process.env.MONGODB_URL).then(() => console.log("MongoDB connected succesfully")).catch(err => console.log(err));
});


