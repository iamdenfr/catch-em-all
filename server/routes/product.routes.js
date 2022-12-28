const Router = require('express')
const { check } = require('express-validator')
const router = new Router()
const Product = require('../models/Product')
const Store = require('../models/Store')


router.get('/products', async (req, res) => {
    try {
        const products = await Product.find()
        res.json(products)
    } catch (e) {
        console.log(e)
        res.send({message: "Server error :("})
    }
})

router.get('/products/:code', async (req, res) => {
    try {
        const product = await Product.findOne({code: req.params.code})
        if (!product){
            res.status(404).json({message: "This product doesn't exist. Try another code or simply create a new product"})
        }
        res.json(product)
    } catch (e) {
        console.log(e)
    }
})

router.post('/products', 
[
    check('code', "Code can't be empty").notEmpty(),
    check('title', "Name can't be empty").notEmpty(),
    check('price', "Price can't be empty").notEmpty(),
    check('price', "Price must be a number").isNumeric()
],
async (req, res) => {
    try {
        const {code, title, price, description, amount} = req.body

        const candidate = await Product.findOne({code})
        if (candidate){
            res.status(400).json({message: "This product already exists. Try another code or simply update this product"})
        }

        const product = new Product({code, title, price, description, amount})
        await product.save()
        // const store = Store.findOne({num:1})
        // await store.updateOne({num:1},{$push: {products_ids: product._id}})
        // .updateOne({num:1},{$push: {products_amount: 0}})
        res.json({message: "Product was created"})
    } catch (e) {
        console.log(e)
    }
})


router.put('/products/:code',
[
    check('title', "Name can't be empty").notEmpty(),
    check('price', "Price can't be empty").notEmpty(),
    check('price', "Price must be a number").isNumeric()
],
async (req, res) => {
    try {
        const {title, price, description, amount} = req.body
        const product = await Product.findOne({code: req.params.code})
        if (!product){
            res.status(404).json({message: "This product doesn't exist. Try another code or simply create a new product"})
        }
        await
        Product
        .findOneAndUpdate(
            {code: req.params.code},
            {title, price, description, amount},
            {new: true}
        )
        res.json({message: "Product was updated"})
    } catch (e) {
        console.log(e)
    }
})

router.delete('/products/:code', async (req, res) => {
    try {
        const product = await Product.findOne({code: req.params.code})
        if (!product){
            res.status(404).json({message: "This product doesn't exist. Try another code or simply create a new product"})
        }

        // const store = Store.findOne({num:1})
        // await store.updateOne({num:1},{$pull: {products_ids: product._id}})

        await Product.findOneAndDelete({code: req.params.code})
        res.json({message: "Product was deleted"})
    } catch (e) {
        console.log(e)
    }
})

module.exports = router