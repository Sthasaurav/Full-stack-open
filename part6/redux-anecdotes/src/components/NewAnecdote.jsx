// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'

function NewAnecdote() {
    const dispatch = useDispatch()


    const addAnecdotes = (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        event.target.anecdote.value = ''
        dispatch(createAnecdote(content))
    }

    return (
        <div>
            <h2>create new</h2>
            <form onSubmit={addAnecdotes}>
                <div><input name="anecdote" /></div>
                <button type="submit">create</button>
            </form>

        </div>
    )
}

export default NewAnecdote
