// The event handlers of routes are commonly referred to 
// as controllers, and for this reason we have created a 
// new controllers directory. All of the routes related to
//  notes are now in the notes.js module under the controllers directory.
const blogsRouter=require('express').Router();
const Blog= require('../models/blogs')

blogsRouter.get('', (request, response) => {
    Blog
      .find({})
      .then(blogs => {
        response.json(blogs)
      })
  })
  
  blogsRouter.post('', (request, response) => {
    const blog = new Blog(request.body)
  
    blog
      .save()
      .then(result => {
        response.status(201).json(result)
      })
  })
  
  module.exports=blogsRouter