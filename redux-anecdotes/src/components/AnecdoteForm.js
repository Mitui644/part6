import React from 'react'
import { connect } from 'react-redux'
import { addAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteForm = (props) => {
    const add = async (event) => {
        event.preventDefault()
        const text = event.target.createAnecdote.value
        event.target.createAnecdote.value = ''
        props.addAnecdote(text)

        props.setNotification(`you added '${text}'`, 5)
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

const mapDispatchToProps = {
    addAnecdote,
    setNotification
}

export default connect(
    null,
    mapDispatchToProps
  )(AnecdoteForm)