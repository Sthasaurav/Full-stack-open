import { configureStore } from '@reduxjs/toolkit'
import anecdoteReducer,{setAnecdotes} from './reducers/anecdoteReducer'
import filterReducer from './reducers/filterReducer'
import anecdoteService from './service/anecdote'


const store = configureStore({
    reducer: {
      anecdotes: anecdoteReducer,
      filter: filterReducer
    }
  })

  anecdoteService.getAll().then(anecdote =>
      store.dispatch(setAnecdotes(anecdote))
    )
  

  export default store;