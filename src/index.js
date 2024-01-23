require('dotenv').config()
const express = require("express");
const cors = require("cors")
const app = express();

const authRoute =require("./routers/auth-route")
const productRoute = require("./routers/product-route")

app.use(cors())
app.use(express.json())

app.use("/auth", authRoute)
app.use("/product", productRoute)

// app.use(errorHandler);
// app.use("*", notFoundHandler)

const port = process.env.POST
app.listen(port,()=>{
    console.log(`Server run on port ${port}`);
})