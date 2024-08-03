"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbConnection = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
require("dotenv/config");
const MONGODB_CNN = process.env.MONGODB_CNN ?? '';
const dbConnection = async () => {
    try {
        await mongoose_1.default.connect(MONGODB_CNN);
        console.log('Database online');
    }
    catch (error) {
        throw new Error('Error in connection');
    }
};
exports.dbConnection = dbConnection;
