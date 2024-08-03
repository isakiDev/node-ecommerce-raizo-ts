"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const UserSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, 'The name is required']
    },
    email: {
        type: String,
        required: [true, 'The email is required'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'The password required']
    },
    img: {
        type: String
    },
    role: {
        type: String,
        required: true
        // emun: ['ADMIN_ROLE', 'USER_ROLE']
    },
    state: {
        type: Boolean,
        default: true
    },
    google: {
        type: Boolean,
        default: false
    }
});
UserSchema.methods.toJSON = function () {
    const { _v, password, _id, ...user } = this.toObject();
    user.uid = _id;
    return user;
};
exports.default = (0, mongoose_1.model)('User', UserSchema);
