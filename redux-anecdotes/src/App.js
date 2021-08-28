import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getVoteAction, getAddAnecdoteAction } from './reducers/anecdoteReducer'

const App = () => {
  const anecdotes = useSelector(state => state)
  const dispatch = useDispatch()

  const vote = (id) => {
    console.log('vote', id)
    dispatch(getVoteAction(id))
  }

  const addAnecdote = (event) => {
    event.preventDefault()
    const text = event.target.createAnecdote.value
    event.target.createAnecdote.value = ''
    dispatch(getAddAnecdoteAction(text))
  }

  return (
    <div>
      <h2>Anecdotes</h2>
      {[...anecdotes].sort((a, b) => b.votes - a.votes).map(anecdote =>
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
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div><input name='createAnecdote'/></div>
        <button>create</button>
      </form>
    </div>
  )
}

export default App