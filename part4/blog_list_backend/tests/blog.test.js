// const mongoose = require('mongoose')
// const { test, after } = require('node:test')
// const supertest = require('supertest')
// const app = require('../app')
// const Blog = require('../models/blogs')
// const helper = require('./test_helper')

// const api = supertest(app)

// test.only('correct amount of blogs are returned as json', async () => {
//   await api
//     .get('/api/blogs')
//     .expect(200)
//     .expect('Content-Type', /application\/json/)
// })

// expect(response.body).toHaveLength(helper.initialBlogs.length)

const { test, after } = require('node:test')
const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')

const api = supertest(app)


test.only('notes are returned as json', async () => {
  await api
    .get('/api/blogs')
    .expect(200)
    .expect('Content-Type', /application\/json/)
})

after(async () => {
  await mongoose.connection.close()
})