"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProduct = exports.getAllProducts = void 0;
const models_1 = require("../models");
const getAllProducts = async (req, res) => {
    const { limit = 8, skip = 0 } = req.query;
    try {
        const [total, products] = await Promise.all([
            models_1.Product.countDocuments({ state: true }),
            models_1.Product.find({ state: true })
                .limit(Number(limit))
                .skip(Number(skip))
                .populate('user', 'name')
                .populate('category', 'name')
        ]);
        return res.status(200).json({
            total,
            products
        });
    }
    catch (error) {
        return res.status(500).json({
            msg: 'You must talk with admin'
        });
    }
};
exports.getAllProducts = getAllProducts;
const getProduct = async (req, res) => {
    const { id } = req.params;
    try {
        const product = await models_1.Product.findById(id)
            .populate('user', 'name')
            .populate('category', 'name');
        if (product?.state == null) {
            return res.status(401).json({
                msg: 'The product is removed'
            });
        }
        return res.json({
            product
        });
    }
    catch (error) {
        return res.status(500).json({
            msg: 'You must talk with admin'
        });
    }
};
exports.getProduct = getProduct;
