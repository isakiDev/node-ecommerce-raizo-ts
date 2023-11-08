import { Router } from 'express'
import { check } from 'express-validator'

import {
  getAllCategories,
  getCategory
} from '../controllers/category'

import { validateError } from '../middlewares/validateError'

const router = Router()

router.get('/', getAllCategories)

router.get('/:id', [
  check('id', 'The id is not valid').isMongoId(),
  validateError
], getCategory)

export default router
