import { Schema, model } from 'mongoose'

const ProductSchema = new Schema({
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
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  price: {
    type: Number,
    default: 0
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Categorie',
    required: true
  },
  description: {
    type: String
  },
  image: {
    type: String
  },
  quantity: {
    type: Number,
    default: 0
  }
})

ProductSchema.methods.toJSON = function () {
  const { _v, _id, category, user, ...products } = this.toObject()

  products.id = _id

  products.user = user.name

  products.category = {
    id: category._id,
    name: category.name
  }

  return products
}

export default model('Product', ProductSchema)
