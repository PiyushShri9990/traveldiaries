const express = require('express')
const { default: mongoose } = require('mongoose')
const dotenv = require('dotenv')
const { default: userRouter } = require('./routing/user-routes')
const { default: postRouter } = require('./routing/post-routes')
const app = express()
const port = process.env.PORT || 5000;

dotenv.config();

// middleware
app.use(express.json());
app.use("/user", userRouter);
app.use("/posts", postRouter);

if(process.env.NODE_ENV = "production"){
    app.use(express.static("myapp/build"));
}

// connection
mongoose
.connect(
    `mongodb+srv://admin:${process.env.MONGODB_PASSWORD}@cluster0.jst4rn1.mongodb.net/?retryWrites=true&w=majority`)

// connection
mongoose
.connect(
    `mongodb+srv://admin:${process.env.MONGODB_PASSWORD}@cluster0.jst4rn1.mongodb.net/?retryWrites=true&w=majority`)

.then(()=>
    app.listen(port, () => 
    console.log("Connection Successfull to localhost port 5000"))
    )
.catch((err)=>console.log(err))
