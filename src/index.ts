import express from 'express'
import cors from 'cors'
import { dbConnection } from './database/config'

import {
  routerCategory,
  routerProduct
} from './routes/index'

const PORT = process.env.PORT
const app = express()

// db
dbConnection()
  .then(() => {
    // middlewares
    app.use(express.json())
    app.use(cors())

    // routes
    app.use('/products', routerProduct)
    app.use('/categories', routerCategory)

    app.listen(PORT, () => {
      console.log(`Listening in PORT http://localhost:${PORT}`)
    })
  })
  .catch((error) => {
    console.log('Error', error.message)
  })

// aaa
