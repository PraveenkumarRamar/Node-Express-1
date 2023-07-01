// console.log("Welcome to Express")
const express  = require("express")
const app = express();
const indexRouter = require('./routes/index-r')
const userRouter = require('./routes/user')
const dashRouter = require('./routes/dashboard')
const PORT  = process.env.port || 8000

app.use(express.json()) // to parse the body like string to proper json
app.use('/',indexRouter)
app.use('/users',userRouter)
app.use('/dashboard',dashRouter)
// app.get('/',(req,res)=>{
//     res.send(`<h1>Welcome to Express</h1>`)
// })


// app.post('/users',(req,res) => {
//     console.log(req.body)
//     res.send({
//         message : "Data saved succesfully"
//     })
// })

app.listen(8000,() => console.log("App is running in 8000")) 