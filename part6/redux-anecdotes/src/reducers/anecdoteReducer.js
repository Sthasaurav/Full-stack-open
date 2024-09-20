import { createSlice } from "@reduxjs/toolkit"
import anecdoteService from '../service/anecdote'

// const getId = () => (100000 * Math.random()).toFixed(0)

// const asObject = (anecdote) => {
//   return {
//     content: anecdote,
//     id: getId(),
//     votes: 0
//   }
// }
const anecdoteSlice = createSlice({
  name: 'anecdote',
  initialState: [],
  reducers: {
    voteAnecdote(state, action){
      const id = action.payload.id
      const changedAnecdote = action.payload
      return state.map(anecdote => 
        anecdote.id !== id ? anecdote : changedAnecdote
      )
    },

    appendAnecdote(state, action){
      state.push(action.payload)
    },
    setAnecdote(state, action){
      return action.payload
    }
  }
})

export const { voteAnecdote, appendAnecdote, setAnecdote } = anecdoteSlice.actions

export const initializeAncedotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch(setAnecdote(anecdotes))
  }
}


export const createAnecdotes = content => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch(appendAnecdote(newAnecdote))
  }
}

export const addVotes = id => {
  return async dispatch => {
    const newVote = await anecdoteService.updateVote(id)
    dispatch(voteAnecdote(newVote))
  }
}
export default anecdoteSlice.reducer 