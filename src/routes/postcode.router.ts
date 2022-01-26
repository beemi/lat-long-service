import express, {Request, Response} from 'express'
import axios from 'axios'

const {endpoint} = require('../config/config')

/**
 * Router Definition
 */

export const router = express.Router()

/**
 * Router to get postcode data with postcode as query.
 */
router.get('/', async (req: Request, res: Response) => {
  const postcode = req.query.postcode
  let key = req.query['postcode']

  // key is not provided
  if (!key) return res.status(400).send('Postcode is required')

  if (!postcode) res.status(400).send('Postcode is required')
  const url = `${endpoint}/postcodes/${postcode}`
  const response = await axios.get(url)
  if (response.status !== 200) {
    res.status(400).send('Postcode is invalid')
  }
  res.json({
    latitude: response.data.result.latitude,
    longitude: response.data.result.longitude
  })
})

/**
 * Router to get postcode data with postcode as a parameter.
 */
router.get('/postcode/:postcode', async (req: Request, res: Response) => {
  const postcode = req.params.postcode

  if (!postcode) res.status(400).send('Postcode is required')
  const url = `${endpoint}/postcodes/${postcode}`
  const response = await axios.get(url)
  if (response.status !== 200) {
    res.status(400).send('Postcode is invalid')
  }
  res.json({
    latitude: response.data.result.latitude,
    longitude: response.data.result.longitude
  })
})
