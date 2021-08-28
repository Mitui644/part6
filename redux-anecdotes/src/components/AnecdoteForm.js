import React from 'react'
import { useDispatch } from 'react-redux'
import { addAnecdote } from '../reducers/anecdoteReducer'
import { addNotification, removeNotification } from '../reducers/notificationReducer'
import anecdoteService from '../services/anecdotes'

const AnecdoteForm = () => {
    const dispatch = useDispatch()

    const add = async (event) => {
        event.preventDefault()
        const text = event.target.createAnecdote.value
        event.target.createAnecdote.value = ''
        const anecdote = await anecdoteService.create(text)
        dispatch(addAnecdote(anecdote))

        dispatch(addNotification(`you added '${text}'`))
        setTimeout(() => {
            dispatch(removeNotification())
        }, 5000)
    }

    return (
        <>
            <h2>create new</h2>
            <form onSubmit={add}>
                <div><input name='createAnecdote'/></div>
                <button type='submit'>create</button>
            </form>
        </>
    )
}

export default AnecdoteForm