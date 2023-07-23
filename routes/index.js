const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')
const { dburl, mongodb } = require('../configuration/dbConfig')
const { UserModel } = require('../schema/UserSchema')
mongoose.connect(dburl)

router.get('/users', async (req, res) => {
    try {
        let user = await UserModel.find();
        res
            .status(200)
            .send({
                message: "Data fetched Successfully",
                user
            })
    } catch (error) {
        res
            .status(400)
            .send({
                message: "Internal server error"
            })
    }
})

router.post("/add", async (req, res) => {
    try {
        let user = await UserModel.findOne({email: req.body.email })
        if (!user) {
            let newUser = await UserModel.create(req.body)
                res
                .status(200)
                .send({
                    message: "Data added successfully"
                })
        }else{
            res
            .status(404)
            .send({
                message:`User with ${req.body.email} already enrolled`
            })
        }

    } catch (error) {
        res
            .status(504)
            .send({
                message:error?.message
            })
    }
})

router.get('/:id', async (req, res) => {
    try {
        let user = await UserModel.findById(req.params.id)
        res
            .status(200)
            .send({
                message: "Data fetches successfully",
                user
            })
    } catch (error) {
        res
            .status(404)
            .send({
                message: "Invalid Id"
            })
    }
})

router.put('/:id', async (req, res) => {
    try {
        let user = await UserModel.findById(req.params.id)
        if(user){
            user.name = req.body.name
            user.email = req.body.email
            user.password = req.body.password
            await user.save()
                    res
            .status(200)
            .send({
                message: "Data updated successfully",
                user
            })
        }else{
        res
            .status(404)
            .send({
                message: "Invalid user Id"
            })
        }

    } catch (error) {
        res
            .status(404)
            .send({
                message: error?.message
            })
    }
})

router.delete('/:id', async (req, res) => {
    try {
        let user = await UserModel.findByIdAndDelete(req.params.id)
        if(user){
            res
            .status(200)
            .send({
                message: "Data deleted successfully"
            })
        }else{
            res
            .status(404)
            .send({
                message:"Not found"
            })
        }

    } catch (error) {
        res
            .status(404)
            .send({
                message: "Invalid Id"
            })
    }
})



module.exports = router