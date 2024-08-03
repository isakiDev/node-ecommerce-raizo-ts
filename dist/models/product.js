"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ProductSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, 'The name is required'],
        unique: true
    },
    state: {
        type: Boolean,
        default: true,
        required: true
    },
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    price: {
        type: Number,
        default: 0
    },
    category: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Categorie',
        required: true
    },
    description: {
        type: String
    },
    image: {
        type: String
    },
    quantity: {
        type: Number,
        default: 0
    }
});
ProductSchema.methods.toJSON = function () {
    const { _v, _id, category, user, ...products } = this.toObject();
    products.id = _id;
    products.user = user.name;
    products.category = {
        id: category._id,
        name: category.name
    };
    return products;
};
exports.default = (0, mongoose_1.model)('Product', ProductSchema);
