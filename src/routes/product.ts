import { Router } from 'express'
import { check } from 'express-validator'

import {
  getAllProducts,
  getProduct
} from '../controllers/product'

import { validateError } from '../middlewares/validateError'

const router = Router()

router.get('/', getAllProducts)

router.get('/:id', [
  check('id', 'The id is not valid').isMongoId(),
  validateError
], getProduct)

export default router
