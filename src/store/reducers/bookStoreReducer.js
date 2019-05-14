
const initState = {
    books : []
}

const bookStoreReducer = (state= initState, action) =>{
    switch(action.type) {
        case 'ADD_BOOKSTORE' :
            return state
        case 'ADD_BOOKSTORE_ERROR' :
            return state
        default:
            return state
    }
}

export default bookStoreReducer