/**
 * Required External Modules
 */
import * as dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import { router } from './routes/postcode.router'

const { port } = require('./config/config')

dotenv.config()

if (!port) {
  process.exit(1)
}

/**
 * App Variables
 */

const PORT: number = parseInt(port as string, 10)

const app = express()

app.enable('verbose errors')

/**
 *  App Configuration
 */
app.use(helmet())
app.use(cors())
app.use(express.json())
app.use('/', router)

//Capture All 404 errors
app.use(function (req, res, next) {
  res.status(404).send('Unable to find the requested resource!')
})

/**
 * Server Activation
 */

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})

module.exports = app
