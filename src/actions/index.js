export function selectMessage(id) {
    return {
        type: 'SELECT_MESSAGE',
        payload: id
    }
}

export function unselectMessage(id) {
    return {
        type: 'UN_SELECT_MESSAGE',
        payload: id
    }
}

export function setName(name) {
    return {
        type: 'SET_NAME',
        payload: name
    }
}
