import React from 'react'
import { useDispatch } from 'react-redux'
import { getAddAnecdoteAction } from '../reducers/anecdoteReducer'

const AnecdoteForm = () => {
    const dispatch = useDispatch()

    const addAnecdote = (event) => {
        event.preventDefault()
        const text = event.target.createAnecdote.value
        event.target.createAnecdote.value = ''
        dispatch(getAddAnecdoteAction(text))
    }

    return (
    <form onSubmit={addAnecdote}>
        <div><input name='createAnecdote'/></div>
        <button type='submit'>create</button>
    </form>
    )
}

export default AnecdoteForm