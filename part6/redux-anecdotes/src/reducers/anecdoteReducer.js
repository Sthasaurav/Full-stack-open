/* eslint-disable no-case-declarations */
import { createSlice } from '@reduxjs/toolkit'

const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const initialState = anecdotesAtStart.map(asObject)

const anecdoteSlice=createSlice({
  name:'anecdote',
  initialState,
  reducer:{
    createAnecdote(state,action){
      return state.push({
        id: getId(),
              content:action.payload,
            votes:0

      })
    },
    voteOnAnecdote(state, action) {
      return state.map(anecdote => 
        anecdote.id===action.data.id? {...anecdote,votes:anecdote.votes+1}:anecdote      )
    },
  }
})

export const {createAnecdote,voteOnAnecdote}=anecdoteSlice.actions
export default anecdoteSlice.reducer

// const anecdotereducer = (state = initialState, action) => {

//   switch(action.type){
//     case 'VOTE':
//       return state.map(anecdote=>
//         anecdote.id===action.data.id? {...anecdote,votes:anecdote.votes+1}:anecdote
//       )
//       case 'CREATE':
//         return [...state, action.data]
    
//   }
//   console.log('action', action)

//   return state
// }

// export const createAnecdote=(content)=>{
//   return{
//     type:'CREATE',
//     data: {
//       id: getId(),
//       content,
//     votes:0
     
//     }

//   }
// }

// export const voteOnAnecdote = (id) => {
//   return {
//     type: 'VOTE',
//     data: { id }
//   }
// }

// export default anecdotereducer

