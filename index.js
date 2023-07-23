const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config()
app.use(express.json());
const port = process.env.PORT 
const indexRouter = require('./routes/index')

app.use('/',indexRouter)
app.listen(port,()=>console.log(`App is running in ${port}`))