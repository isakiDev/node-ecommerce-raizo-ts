import mongoose from 'mongoose'
import 'dotenv/config'

const MONGODB_CNN = process.env.MONGODB_CNN ?? ''

export const dbConnection = async (): Promise<void> => {
  try {
    await mongoose.connect(MONGODB_CNN)
    console.log('Database online')
  } catch (error) {
    throw new Error('Error in connection')
  }
}
