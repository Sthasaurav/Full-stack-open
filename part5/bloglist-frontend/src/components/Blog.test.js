import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Blog from './Blog'

test('content before clicking view button', () => {
  const blog = {
    title: 'React Testing Patterns',
    author: 'Kent C. Dodds',
    url: 'http://example.com',
    likes: 50,
    user: {
      id: 'abcd'
    }
  }
  const user = {
    id: 'abcd'
  }

  const { container } = render(<Blog blog={blog} user={user}/>)

  const div = container.querySelector('.whenHidden')

  expect(div).toHaveTextContent(
    'React Testing Patterns Kent C. Dodds'
  )
})

test('content after clicking view button', async () => {
  const oneBlog = {
    title: 'React Testing Patterns',
    author: 'Kent C. Dodds',
    url: 'http://example.com',
    likes: 50,
    user: {
      id: 'abcd'
    }
  }
  const user = {
    id: 'abcd'
  }

  const { container } = render(<Blog blog={oneBlog} user={user}/>)

  const div = container.querySelector('.whenShown')

  expect(div).toHaveTextContent('http://example.com')
  expect(div).toHaveTextContent('50')
})

test('likes button click twice', async () => {
  const oneBlog = {
    title: 'React Testing Patterns',
    author: 'Kent C. Dodds',
    url: 'http://example.com',
    likes: 50,
    user: {
      id: 'abcd'
    }
  }
  const user = {
    id: 'abcd'
  }

  const mockHandler = jest.fn()

  render(<Blog blog={oneBlog} user={user} addLikes={mockHandler}/>)

  const users = userEvent.setup()
  const button = screen.getByText('likes')
  await users.click(button)
  await users.click(button)

  expect(mockHandler.mock.calls).toHaveLength(2)
})
