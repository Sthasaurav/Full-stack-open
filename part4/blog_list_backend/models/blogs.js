// The responsibility of establishing the connection to the database 
// has been given to the app.js module. The blogs.js file under the models directory 
// only defines the Mongoose schema for blogs.
const mongoose = require('mongoose')
const blogSchema = new mongoose.Schema({
    title: String,
    author: String,
    url: String,
    likes: Number
  })
  const Blog = mongoose.model('Blog', blogSchema)

module.exports=Blog;
