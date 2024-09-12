const Blog = require('../models/blog')

const initialBlogs = [
  {
    title: "Test Blog 1",
    author: "God",
    url: "http://www.god.com",
    likes: 0
  },
  {
    title: "bang, bang!",
    author: "string",
    url: "http://www.horrorstuff.com",
    likes: 8257
  }
]

const blogsinDb = async () => {
  const blogs = await Blog.find({})
  return blogs.map(blog => blog.toJSON())
}

module.exports = {
  initialBlogs, blogsinDb
}