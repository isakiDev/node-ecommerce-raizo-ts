"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const config_1 = require("./database/config");
const index_1 = require("./routes/index");
const PORT = process.env.PORT;
const app = (0, express_1.default)();
// db
(0, config_1.dbConnection)()
    .then(() => {
    // middlewares
    app.use(express_1.default.json());
    app.use((0, cors_1.default)({ origin: 'https://isakidev-raizo.netlify.app' }));
    // routes
    app.use('/products', index_1.routerProduct);
    app.use('/categories', index_1.routerCategory);
    app.listen(PORT, () => {
        console.log(`Listening in PORT http://localhost:${PORT}`);
    });
})
    .catch((error) => {
    console.log('Error', error.message);
});
