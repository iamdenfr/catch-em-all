const Router = require('express')
const { check } = require('express-validator')
const router = new Router()
const product = require('../models/Product')
const store = require('../models/Store')


router.get('/products', async (req, res) => {
    try {
        const products = await product.find()
        res.json(products)
    } catch (e) {
        console.log(e)
        res.send({message: "Server error"})
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
        const {code, title, price, description} = req.body
        const prod = new product({code, title, price, description})
        await prod.save()
        const storeNewProduct = store.findOne({num:1})
        await storeNewProduct.updateOne({num:1},{$push: {products_ids: prod._id}})
        res.json({message: "Product was created"})
    } catch (e) {
        console.log(e)
        res.send({message: "Server error"})
    }
})

module.exports = router