const express= require('express');
const UserService= require('../services/userService');
const userService = require('../services/userService');
const router = express.Router();

router.get('/User', async(req,res) =>{
    const users = userService.getAllUsers();
    res.json(users);
})
module.exports= router;
