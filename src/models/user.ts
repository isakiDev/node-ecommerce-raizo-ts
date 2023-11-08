import { Schema, model } from 'mongoose'

const UserSchema = new Schema({
  name: {
    type: String,
    required: [true, 'The name is required']
  },
  email: {
    type: String,
    required: [true, 'The email is required'],
    unique: true
  },
  password: {
    type: String,
    required: [true, 'The password required']
  },
  img: {
    type: String
  },
  role: {
    type: String,
    required: true
    // emun: ['ADMIN_ROLE', 'USER_ROLE']
  },
  state: {
    type: Boolean,
    default: true
  },
  google: {
    type: Boolean,
    default: false
  }
})

export default model('User', UserSchema)
