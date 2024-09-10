const Blog = require('../models/blogs')

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

// const nonExistingId = async () => {
//   const note = new Note({ content: 'willremovethissoon', date: new Date() })
//   await note.save()
//   await note.remove()

//   return note._id.toString()
// }

const blogsinDb = async () => {
  const blogs = await Blog.find({})
  return blogs.map(blog => blog.toJSON())
}

module.exports = {
  initialBlogs, blogsinDb
}