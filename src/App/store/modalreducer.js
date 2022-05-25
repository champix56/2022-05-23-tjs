const initialState = {
    text: <div><h1>Bienvenue</h1>Faites vous meme vos meme ;-)</div>,
    isShown: false
}

const modalReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'OPEN_MODAL':
            return { text: action.value, isShown: true }
        case 'CLOSE_MODAL':
            return { text: '', isShown: false }

        default:
            return state
    }
}
export default modalReducer;