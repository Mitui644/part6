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

export const addNotification = content => {
    return {
      type: 'SET_NOTIFICATION',
      content: content,
    }
}

export const removeNotification = () => {
    return {
      type: 'REMOVE_NOTIFICATION'
    }
}

export default notificationReducer