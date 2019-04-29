export const createBookStore = (book) =>{

    return (dispatch, getState) => {
        // make async call to database
        dispatch({
            type : 'ADD_BOOKSTORE',
            book
        })
    }
        
}