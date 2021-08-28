import anecdoteService from '../services/anecdotes'

const anecdoteReducer = (state = [], action) => {
  console.log('state now: ', state)
  console.log('action', action)

  switch(action.type) {
    case 'UPDATE_ANECDOTE':
      const updatedAnecdote = action.data
      return state.map(a => a.id !== updatedAnecdote.id ? a : updatedAnecdote)
    case 'CREATE_ANECDOTE':
      return [...state, action.data]
    case 'SET_ANECDOTES':
      return action.data
    default:
        return state
  }
}

export const addVote = (anecdote) => {
  return async dispatch => {
    const updatedAnecdote = await anecdoteService.update({...anecdote, votes: anecdote.votes + 1 })
    dispatch({
      type: 'UPDATE_ANECDOTE',
      data: updatedAnecdote
    })
  }
}

export const addAnecdote = (text) => {
  return async dispatch => {
    const anecdote = await anecdoteService.create(text)
    dispatch({
      type: 'CREATE_ANECDOTE',
      data: anecdote,
    })
  }
}

export const setAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'SET_ANECDOTES',
      data: anecdotes
    })
  }
}

export default anecdoteReducer