// The event handlers of routes are commonly referred to 
// as controllers, and for this reason we have created a 
// new controllers directory. All of the routes related to
//  notes are now in the notes.js module under the controllers directory.
const blogsRouter=require('express').Router();
const Blog= require('../models/blogs')

blogsRouter.get('/', async (request, response) => {
  const blogs = await Blog.find({})
  response.json(blogs)
  })
  
  blogsRouter.post('/', async (request, response) => {
    const blog = new Blog(request.body)
    const savedBlog = await blog.save()
    response.status(201).json(savedBlog)
  })
  
  blogsRouter.delete('/:id', async (request, response) => {
    await Blog.findByIdAndRemove(request.params.id)
    response.status(204).end()
  })
  
 
  blogsRouter.put('/:id', async (request, response) => {
    const updatedBlog = await Blog.findByIdAndUpdate(request.params.id, request.body, { new: true })
    response.json(updatedBlog)
  })
  
  module.exports=blogsRouter