const express = require('express')
const router = express.Router()
// const {getUser} = require("../controller/index/users")
// router.get('/',getUser)

const data = [
    {
        name: "Praveen",
        email: "praveenram@gmail.com",
        role: "Full stack developer"
    },
    {
        name: "Vishnu",
        email: "vishnu@gmail.com",
        role: "W-developer"
    },
    {
        name: "Sanjay",
        email: "snjay@gmail.com",
        role: "B-developer"
    },
    {
        name: "Ragul",
        email: "ragul@gmail.com",
        role: "F-developer"
    }
]

router.get('/all', (req, res) => {
    res
        .status(200)
        .send({
            message: "Data loaded successfully",
            data
        })
})
router.post('/add', (req, res) => {
    // console.log(req.body)
    data.push(req.body)
    res
        .status(200)
        .send({
            message: "Data added succefully",
            data
        })
})

router.get("/:id", (req, res) => {
    if (Number(req.params.id) < data.length) {
        res
            .status(200)
            .send({
                message: "Data fetched successfully",
                user: data[req.params.id]
            })
    } else {
        res
            .status(404)
            .send({
                message: "Not found"
            })
    }
})

router.put("/:id", (req, res) => {
    if (Number(req.params.id) < data.length) {
        data.splice(req.params.id, 1, req.body)
        res
            .status(200)
            .send({
                message: "data modified succesfully",
                data
            })
    } else {
        res
            .status(404)
            .send({
                message: "Not found"
            })
    }
})

router.delete("/:id", (req, res) => {
    if (Number(req.params.id) < data.length) {
        data.splice(req.params.id, 1)
        res
            .status(200)
            .send({
                message: "User deleted sucessfuly",
                data
            })
    }else{
        res
        .status(404)
        .send({
            message:"not found "
        })
    }

})
module.exports = router