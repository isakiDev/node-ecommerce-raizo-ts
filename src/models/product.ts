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

export default model('Product', ProductSchema)
