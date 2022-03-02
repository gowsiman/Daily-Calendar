const express = require('express')
const router = express.Router()
const models = require('../models/calendarmodels')

const userModel = models.UserModel
const calendarModel = models.CalendarModel

router.post('/createUser', async (req, res) => {
    console.log(req.body)
    const user = new userModel({
        name:req.body.name,
        password:req.body.password1,
        email:req.body.email,
    })
    try{
        await user.save()
        res.status(200).json(user)
    }
    catch(error){
        console.log(error)
        res.status(500).send("Username/Email already exists!")
    }
})

router.post('/loginUser', async (req, res) => {
    const name = req.body.name
    const password = req.body.password
    try{
        await userModel.findOne({name: name}, function(err, doc){
            if (err || !doc || password !== doc.password) res.status(500).json(err)
            else res.status(200).json(req.body)
        })
    }
    catch(error){
    }
})

router.post('/tasks',  (req, res) => {
    const name = req.body.name
    const date = req.body.date
    // console.log(name)
    try{
        userModel.findOne({name: name}, function(err, doc){
            const tasks = doc.tasks.filter((task)=>task.date === date)
            if (!err) res.status(200).json(tasks)
            else res.status(500).json('fail')
        })
        
    }
    catch(error){
        console.log(error)
    }
})

router.post('/addTask', async (req, res) => {
    const name = req.body.name
    const date = req.body.date
    const task = req.body.task
    try{
        await userModel.findOne({name: name}, async function(err, doc){
            doc.tasks.push({date: date, task: task})
            doc.save()
            const tasks = doc.tasks.filter((task)=>task.date === date)
            if (err) res.status(500).json("Error in adding the task")
            else res.status(200).json(tasks);
        })
    }
    catch(error){

    }
})

router.post('/deleteTask', async (req, res) => {
    const name = req.body.name
    const date = req.body.date
    const task = req.body.task
    try{
        await userModel.findOneAndUpdate(
            {name: name}, 
            {$pull: {tasks: {date: date,task: task}}},
            function(err){            
            if (err) res.status(500).json("Error in adding the task")
            else res.status(200).json("success");
        })
        
    }
    catch(error){

    }
})

router.get('/tasks', async (req, res) => {
    try{
            await userModel.find({}, function(err, doc){
            if (err) res.status(500).json(err)
            else res.status(200).json(doc)
        })
    }
    catch(error){

    }
})

module.exports= router;