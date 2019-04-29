
const initState = {
    books : []
}

const bookStoreReducer = (state= initState, action) =>{
    switch(action.type) {
        case 'ADD_BOOKSTORE' :
            console.log('created',action.book)
            return state
        case 'ADD_BOOKSTORE_ERROR' :
            console.log('created',action.err)
            return state
        default:
            return state
    }
}

export default bookStoreReducer