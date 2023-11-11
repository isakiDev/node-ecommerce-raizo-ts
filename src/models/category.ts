import { Schema, model } from 'mongoose'

const CategorySchema = new Schema({
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
  }
})

CategorySchema.methods.toJSON = function () {
  const { _v, _id, user, ...categories } = this.toObject()

  categories.id = _id
  categories.user = user.name

  return categories
}

export default model('Categorie', CategorySchema)
