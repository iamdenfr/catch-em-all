const product = require('../models/Product');
const {validationResult} = require('express-validator');
const ApiError = require('../error/ApiError');

class ProductController {
    async create(req, res, next) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return next(ApiError.BadRequest('Validation error', errors.array()));
            }

            const {code, title, price, description, amount} = req.body;
            const candidate = await Product.findOne({code
            });
            if (candidate) {
                return next(ApiError.BadRequest('Product with this code already exists'));
            }
            const product = new Product({code, title, price, description, amount});
            await product.save();
            return res.json(product);
        } catch (e) {
            next(e);
        }
    }
}

module.exports = new ProductController();

