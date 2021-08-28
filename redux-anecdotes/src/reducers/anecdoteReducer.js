import anecdoteService from '../services/anecdotes'

const anecdoteReducer = (state = [], action) => {
  console.log('state now: ', state)
  console.log('action', action)

  switch(action.type) {
    case 'VOTE_ANECDOTE':
      const id = action.data.id
      const anecdote = state.find(n => n.id === id)
      const changedAnecdote = { 
        ...anecdote, 
        votes: anecdote.votes + 1
      }
      return state.map(a => a.id !== id ? a : changedAnecdote )
    case 'CREATE_ANECDOTE':
      return [...state, action.data]
    case 'SET_ANECDOTES':
      return action.data
    default:
        return state
  }
}

export const addVote = (id) => {
  return {
    type: 'VOTE_ANECDOTE',
    data: { id }
  }
}

export const addAnecdote = (anecdote) => {
  return {
    type: 'CREATE_ANECDOTE',
    data: anecdote
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