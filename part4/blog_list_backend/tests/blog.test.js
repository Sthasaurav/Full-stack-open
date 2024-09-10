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
const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const api = supertest(app)
const Blog = require('../models/blog')
const helper = require('./test_helper')

beforeEach(async () => {
  await Blog.deleteMany({})
  const blogObjects = helper.initialBlogs.map(blog => new Blog(blog))
  const promiseArray = blogObjects.map(blog => blog.save())
  await Promise.all(promiseArray)
})

test('correct ammount of blog posts are returned in json format', async () => {
  const response = await api
    .get('/api/blogs')
    .expect(200)
    .expect('Content-Type', /application\/json/)

  expect(response.body).toHaveLength(helper.initialBlogs.length)
})

test('_id is defined', async () => {
  const response = await api.get('/api/blogs')
  expect(response.body[0].id).toBeDefined()
})

test('a blog can be added', async () => {
  const newBlog = {
    title: "Best ways to make money online",
    author: "overnight",
    url: "www.spam.com",
    likes: 9898
  }

  await api
    .post('/api/blogs')
    .send(newBlog)
    .expect(201)
    .expect('Content-Type', /application\/json/)

  const blogsAtEnd = await helper.blogsinDb()
  expect(blogsAtEnd).toHaveLength(helper.initialBlogs.length + 1)

  const title = blogsAtEnd.map(n => n.title)
  expect(title).toContain('Best ways to make money online')
})

test('if likes missing, defaults to 0', async () => {
  const newBlog = {
    title: "wikipedia",
    author: "wikipedia",
    url: "www.wikipedia.com",
  }

  const response = await api.post('/api/blogs').send(newBlog)
  expect(response.body.likes).toBe(0)
})

test('if title & url are missing 400 returned', async () => {
  const newBlog = {
    author: "miniclip",
    likes: 74
  }

  await api.post('/api/blogs').send(newBlog).expect(400)
})

afterAll(() => {
  mongoose.connection.close()
})