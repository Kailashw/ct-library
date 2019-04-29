export const createBookStore = (book) =>{

    return (dispatch, getState, {getFirebase, getFirestore})  => {
        // make async call to database
        const firestore = getFirestore()
        firestore.collection('books').add({
            ...book,
            authorFirstName : 'Kailash',
            authorLastName : 'Walldoddi',
            authorId : 12345,
            createdOn : new Date()
        }).then(()=> {
            dispatch({
                type : 'ADD_BOOKSTORE',
                book
            })
        }
        )
    }
}