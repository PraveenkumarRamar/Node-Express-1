const express = require("express")
const router = express.Router()

const users = [
    {
        name: "Praveen",
        email: "praveen@gmail.com",
        password: 12345,
        role: "student"
    },
    {
        name: "Parimala",
        email: "parimala@gmail.com",
        password: 12345,
        role: "mother"
    },
    {
        name: "Ramar",
        email: "ramar@gmail.com",
        password: 12345,
        role: "father"
    },
    {
        name: "Praveena",
        email: "praveena@gmail.com",
        password: 12345,
        role: "sister"
    }
]

router.get('/all', (req, res) => {
    res
        .status(200)
        .send({
            message: "All Users",
            users
        })
})

router.get('/:id', (req, res) => {
    if (Number(req.params.id) < users.length) {
        res
            .status(200)
            .send({
                message: "data fetched booooooooooooom",
                data: users[req.params.id]
            })
    } else {
        res
            .status(404)
            .send("Data not found")
    }
})

router.post('/', (req, res) => { //--like create a data
    users.push(req.body)
    res
        .status(201)
        .send({
            message: "Data saved successfully",
            users
        })
})

router.put("/:id", (req, res) => {   //put like edit a data
    if (Number(req.params.id) < users.length) {
        users.splice(req.params.id, 1, req.body)
        res
            .status(201)
            .send({
                message: "Insert a user Successuflly",
                users
            })
    }
    else {
        res
            .status(404)
            .send({ message: "Data not found" })
    }

})

router.delete("/:id",(req,res) => {
    if(Number(req.params.id)<users.length){
        users.splice(req.params.id,1)
        res
        .status(201)
        .send({
            message:"data deleted successfully",
            users
        })
    }else{
        res
        .status(404)
        .send({
            message:"data not found"
        })
    }
})

// router.get('/' , (req,res) => {
//     res.send(`<h1>User Route</h1>`)
// })

module.exports = router