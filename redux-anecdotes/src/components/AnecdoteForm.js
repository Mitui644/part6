import React from 'react'
import { useDispatch } from 'react-redux'
import { addAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteForm = () => {
    const dispatch = useDispatch()

    const add = async (event) => {
        event.preventDefault()
        const text = event.target.createAnecdote.value
        event.target.createAnecdote.value = ''
        dispatch(addAnecdote(text))

        dispatch(setNotification(`you added '${text}'`, 5))
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