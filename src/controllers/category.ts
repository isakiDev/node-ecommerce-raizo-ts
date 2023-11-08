import { Request, Response } from 'express'
import { Category } from '../models'

const getAllCategories = async (_req: Request, res: Response): Promise<void> => {
  try {
    const categories = await Category.find({ state: true })
      .populate('user', 'name')

    res.json({
      categories
    })
  } catch (error) {
    res.status(401).json({
      msg: 'Categories not found'
    })
  }
}

const getCategory = async (req: Request, res: Response): Promise<Response> => {
  const { id } = req.params

  try {
    const category = await Category.findById(id)
      .populate('user', 'name')

    if (category?.state === null) {
      return res.json({
        msg: 'Category not found'
      })
    }

    return res.json({
      category
    })
  } catch (error) {
    return res.status(500).json({
      msg: 'You must talk with admin'
    })
  }
}

export {
  getAllCategories,
  getCategory
}
