import { useSelector, useDispatch } from 'react-redux'
import { voteOnAnecdote } from '../reducers/anecdoteReducer'

function AnecdoteList() {
  const dispatch = useDispatch()

  const anecdotes = useSelector(state => state.anecdotes)
  const filter = useSelector(state => state.filter)
    // .filter(anecdote => anecdote.content.toLowerCase()
    //   .includes(state.filter.toLowerCase())
  
  //}
  const filteredAnecdotes = anecdotes.filter(anecdote =>
    anecdote.content.toLowerCase().includes(filter.toLowerCase())
  )

  // const anecdotes = useSelector(state =>
  //   state.anecdotes.filter(anecdote =>
  //     anecdote.content && state.filter &&
  //     anecdote.content.toLowerCase().includes(state.filter.toLowerCase())
  //   )
  // )



  const handlevote = (id) => {
    dispatch(voteOnAnecdote(id))
  }

  return (
    <div>
      {filteredAnecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handlevote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default AnecdoteList
