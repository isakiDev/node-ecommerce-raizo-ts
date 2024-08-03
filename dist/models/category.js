"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const CategorySchema = new mongoose_1.Schema({
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
    }
});
CategorySchema.methods.toJSON = function () {
    const { _v, _id, user, ...categories } = this.toObject();
    categories.id = _id;
    categories.user = user.name;
    return categories;
};
exports.default = (0, mongoose_1.model)('Categorie', CategorySchema);
