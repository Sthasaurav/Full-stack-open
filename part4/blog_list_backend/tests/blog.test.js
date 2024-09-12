const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const api = supertest(app)
const Blog = require('../models/blog')
const User = require('../models/user')
const helper = require('./test_helper')

const newUserToken = async () => {
  const newUser = {
    "username": "automatedTestUser",
    "name": "Automated Test User",
    "password": "testuser"
  }

  await api.post('/api/users').send(newUser)
  
  const loginDetails = await api.post('/api/login').send(newUser)
  return loginDetails.body.token
}

beforeEach(async () => {
  await Blog.deleteMany({})
  await User.deleteMany({})

  const blogObjects = helper.initialBlogs.map(blog => new Blog(blog))
  const promiseArray = blogObjects.map(blog => blog.save())
  await Promise.all(promiseArray)
})

test('correct amount of blog posts are returned in json format', async () => {
  const response = await api
    .get('/api/blogs')
    .expect(200)
    .expect('Content-Type', /application\/json/)

  expect(response.body).toHaveLength(helper.initialBlogs.length)
})

test('blog entries have id field instead of _id', async () => {
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
  const token = await newUserToken()

  await api
    .post('/api/blogs')
    .set('Authorization', `bearer ${token}`)
    .send(newBlog)
    .expect(201)
    .expect('Content-Type', /application\/json/)

  const blogsAtEnd = await helper.blogsInDb()
  expect(blogsAtEnd).toHaveLength(helper.initialBlogs.length + 1)

  const titles = blogsAtEnd.map(n => n.title)
  expect(titles).toContain('Best ways to make money online')
})

test('if likes property is missing, defaults to 0', async () => {
  const newBlog = {
    title: "wikipedia",
    author: "wikipedia",
    url: "www.wikipedia.com"
  }

  const token = await newUserToken()

  const response = await api
    .post('/api/blogs')
    .set('Authorization', `bearer ${token}`)
    .send(newBlog)
    .expect(201)
    .expect('Content-Type', /application\/json/)

  expect(response.body.likes).toBe(0)
})

test('if title and url are missing, returns 400', async () => {
  const newBlog = {
    author: "miniclip",
    likes: 74
  }

  const token = await newUserToken()

  await api
    .post('/api/blogs')
    .set('Authorization', `bearer ${token}`)
    .send(newBlog)
    .expect(400)
})

test('adding blog fails if token is not provided', async () => {
  const newBlog = {
    title: "Introduction to Machine Learning",
    author: "Jane Doe",
    url: "www.mlintro.com",
    likes: 3000
  }
  
  await api
    .post('/api/blogs')
    .send(newBlog)
    .expect(401)
})

afterAll(() => {
  mongoose.connection.close()
})
