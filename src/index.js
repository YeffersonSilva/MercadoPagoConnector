import express from 'express'
import morgan from 'morgan'

import paymentRoutes from './routes/payment.routes.js'
import  {PORT} from './config.js'

const app = express()
app.use(morgan('dev'))

app.use( paymentRoutes)
// /api/payment

app.listen(PORT, () => {
    console.log('Server is running on http://localhost:3000')
    })