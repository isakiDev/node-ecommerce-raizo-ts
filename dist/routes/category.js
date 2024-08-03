"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const category_1 = require("../controllers/category");
const validateError_1 = require("../middlewares/validateError");
const router = (0, express_1.Router)();
router.get('/', category_1.getAllCategories);
router.get('/:id', [
    (0, express_validator_1.check)('id', 'The id is not valid').isMongoId(),
    validateError_1.validateError
], category_1.getCategory);
exports.default = router;
