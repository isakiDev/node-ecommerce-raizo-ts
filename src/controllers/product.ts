import { Request, Response } from 'express'
import { Product } from '../models'

const getAllProducts = async (req: Request, res: Response): Promise<Response> => {
  const { limit = 8, skip = 0 } = req.query

  try {
    const [total, products] = await Promise.all([
      Product.countDocuments({ state: true }),
      Product.find({ state: true })
        .limit(Number(limit))
        .skip(Number(skip))
        .populate('user', 'name')
        .populate('category', 'name')
    ])

    return res.status(200).json({
      total,
      products
    })
  } catch (error) {
    return res.status(500).json({
      msg: 'You must talk with admin'
    })
  }
}

const getProduct = async (req: Request, res: Response): Promise<Response> => {
  const { id } = req.params

  try {
    const product = await Product.findById(id)
      .populate('user', 'name')
      .populate('category', 'name')

    if (product?.state == null) {
      return res.status(401).json({
        msg: 'The product is removed'
      })
    }

    return res.json({
      product
    })
  } catch (error) {
    return res.status(500).json({
      msg: 'You must talk with admin'
    })
  }
}

export {
  getAllProducts,
  getProduct
}
