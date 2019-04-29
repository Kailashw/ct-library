
const initState = {
    books : [
        {id:1, title:'book 1', description: 'This is a good book'},
        {id:2, title:'book 2', description: 'A good book this is.'},
        {id:3, title:'book 3', description: 'is this a good book?'},
        {id:4, title:'book 4', description: 'good book is this?'},
        {id:5, title:'book 5', description: 'a good book'}
    ]
}

const bookStoreReducer = (state= initState, action) =>{
    switch(action.type) {
        case 'ADD_BOOKSTORE' :
            console.log('created',action.book)
            return state
        default:
            return state
    }
    return state
}

export default bookStoreReducer