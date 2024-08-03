"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const product_1 = require("../controllers/product");
const validateError_1 = require("../middlewares/validateError");
const router = (0, express_1.Router)();
router.get('/', product_1.getAllProducts);
router.get('/:id', [
    (0, express_validator_1.check)('id', 'The id is not valid').isMongoId(),
    validateError_1.validateError
], product_1.getProduct);
exports.default = router;
