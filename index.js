const express = require('express')
const app = express() //instance object of express
app.use(express.json()) // for getting the data in console
const indexRouter = require("./routes/index");
const userRouter = require("./routes/users");
const dashboardRouter = require("./routes/dashboard");


app.use("/",indexRouter)
app.use("/users",userRouter)
app.use("/dashboard",dashboardRouter)


app.listen(9009,()=>console.log(`App is listening on 9009`))