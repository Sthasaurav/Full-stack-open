import { createSlice } from '@reduxjs/toolkit'
// import {} from '../service/anecdote'

const anecdotesAtStart = []


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
  reducers:{
    createAnecdote(state,action){
      state.push(action.payload)

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
    appendAnecdote(state, action) {
      state.push(action.payload)
    },
    setAnecdotes(state,action){
      return action.payload
    }
  }
})

export const {createAnecdote,voteOnAnecdote,appendAnecdote,setAnecdotes}=anecdoteSlice.actions
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

