const notificationReducer = (state = null, action) => {
    console.log(action)
    switch (action.type) {
        case 'SET_NOTIFICATION':
            return action.content
        case 'REMOVE_NOTIFICATION':
            return null
        default:
            return state
    }
}

export const setNotification = (content, duration) => {
    return async dispatch => {
        dispatch({
            type: 'SET_NOTIFICATION',
            content: content
        })

        setTimeout(() => {
            dispatch({
                type: 'REMOVE_NOTIFICATION'
            })
      }, duration * 1000)
    }
}

export default notificationReducer