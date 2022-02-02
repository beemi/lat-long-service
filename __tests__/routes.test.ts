import request from 'supertest'
import express from 'express'

import {router} from '../src/routes/postcode.router';

const app = express()

app.use(express.urlencoded({extended: false}));
app.use("/", router);

it('should return 200 OK', async () => {
  const res = await request(app).get('').query({
    postcode: 'RM176EY'
  })
  expect(res.statusCode).toEqual(200)
  expect(res.body).toHaveProperty('latitude')
  expect(res.body).toHaveProperty('longitude')
})


it('should return 200 OK', async () => {
  const res = await request(app).get('').query({
    test: 'RM176EY'
  })
  console.log(JSON.stringify(res))
  expect(res.statusCode).toEqual(400)
})
