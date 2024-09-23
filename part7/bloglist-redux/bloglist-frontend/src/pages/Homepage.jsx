import React from 'react'
import BlogForm from '../components/BlogForm'
import { useEffect, useRef } from 'react'
import Blog from '../components/Blog'
import Togglable from '../components/Togglable'
import { useDispatch,useSelector } from 'react-redux'
import { readBlog } from '../reducers/blogsReducer'



function Homepage() {
  const dispatch = useDispatch()

  const blogs = useSelector((state) => state.blogs.data)
  const user = useSelector((state) => state.user.user)
  useEffect(() => {
    dispatch(readBlog())
  }, [dispatch])
  const blogFormRef = useRef()

  return (
    <div>
      <Togglable buttonLabel="create new blog" ref={blogFormRef}>
        <BlogForm />
      </Togglable>

      {[...blogs]
        .sort((a, b) => b.likes - a.likes)
        .map((blog) => (
          <Blog key={blog.id} blog={blog} username={user.username} />
        ))}
    </div>
  )
}

export default Homepage
