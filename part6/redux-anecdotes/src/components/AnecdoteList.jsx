// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { voteOnAnecdote } from '../reducers/anecdoteReducer'

function AnecdoteList() {
  const dispatch = useDispatch()
  const anecdotes = useSelector(state => state.anecdotes
    .filter(anecdote => anecdote.content.toLowerCase().includes(state.filter.toLowerCase()))
  )



  const vote = (id) => {
    dispatch(voteOnAnecdote(id))
  }

  return (
    <div>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default AnecdoteList
