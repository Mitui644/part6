import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addVote } from '../reducers/anecdoteReducer'
import { addNotification, removeNotification } from '../reducers/notificationReducer'

const AnecdoteList = () => {
    const anecdotes = useSelector(state => state.anecdotes)
    const dispatch = useDispatch()

    const vote = (anecdote) => {
        console.log('vote', anecdote.id)
        dispatch(addVote(anecdote))
        dispatch(addNotification(`you voted '${anecdote.content}'`))
        setTimeout(() => {
            dispatch(removeNotification())
        }, 5000)
    }

    const filter = useSelector(state => state.filter)
    const filteredAnecdotes = anecdotes.filter(anecdote => {
        return anecdote.content.includes(filter)
    })

    return (
        filteredAnecdotes.sort((a, b) => b.votes - a.votes).map(anecdote =>
            <div key={anecdote.id}>
                <div>
                    {anecdote.content}
                </div>
                <div>
                    has {anecdote.votes}
                    <button onClick={() => vote(anecdote)}>vote</button>
                </div>
            </div>
        )
    )
}

export default AnecdoteList