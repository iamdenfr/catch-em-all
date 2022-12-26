const Router = require("express")
const config = require("config")
const User = require ("../models/User")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const router = new Router()
const {check, validationResult} = require("express-validator")
const authMiddleware = require("../middleware/auth.middleware")

router.post('/registration',
[
    check('email', "Incorrect email").isEmail(),
    check('password',"Password must be longer than 8 and shorter than 20 symbols").isLength({min: 8, max: 20})
], async (req, res) => {
    try {
        console.log(req.body)
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({message: "Incorrect request", errors})
        }

        const {email, password} = req.body;

        const candidate = await User.findOne({email})

        if(candidate) {
            return res.status(400).json({message: `User with email ${email} already exists`})
        }
        const hashPassword = await bcrypt.hash(password, 8)
        
        const user = new User({email, password: hashPassword, num: 1})
        await user.save()
        return res.json({message: "User was created"})
        
    } catch (e) {
        console.log(e)
        res.send({message: "Server error"})
    }
})

router.post('/login', async (req, res) => {
    try {
        const {email, password} = req.body;

        const user = await User.findOne({email})
        if(!user){
            res.status(404).json({message: "User not found"})
        }
        const isPasswordValid = bcrypt.compareSync(password, user.password)
        if (!isPasswordValid){
            return res.status(400).json({message: "Incorrect password"})
        }
        
        const token = jwt.sign({id: user.id}, config.get("secretKey"), {expiresIn: "24h"})
        
        return res.json(
            {
                token,
                id: user.id,
                email: user.email
            }
        )

    } catch (e) {
        console.log(e)
        res.send({message: "Server error"})
    }
})

router.get('/auth', authMiddleware, 
    async (req, res) => {
        try {
            const user = await User.findOne({_id: req.user.id})
            const token = jwt.sign({id: user.id}, config.get("secretKey"), {expiresIn: "24h"})
        
            return res.json(
            {
                token,
                id: user.id,
                email: user.email
            })

        } catch(e) {
            console.log(e)
            res.send({message: "Server error"})
        }

})

module.exports = router