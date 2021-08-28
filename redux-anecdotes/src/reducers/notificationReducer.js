const notificationReducer = (state = {content: null, removeId: null}, action) => {
    console.log(action)
    switch (action.type) {
        case 'SET_NOTIFICATION':
            if(state.removeId != null) {
                clearTimeout(state.removeId)
            }
            return { content: action.content, removeId: action.removeId }
        case 'REMOVE_NOTIFICATION':
            return { content: null, removeId: null }
        default:
            return state
    }
}

export const setNotification = (content, duration) => {
    return async dispatch => {
        const removeId = setTimeout(() => {
            dispatch({
                type: 'REMOVE_NOTIFICATION'
            })
      }, duration * 1000)

      dispatch({
        type: 'SET_NOTIFICATION',
        content: content,
        removeId: removeId
    })
    }
}

export default notificationReducer