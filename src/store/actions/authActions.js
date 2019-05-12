export const signIn = (credentials) =>{
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();
        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(()=>{
            dispatch({type: 'LOGIN_SUCCESS'})
        }).catch((err)=>{
            dispatch({type: 'LOGIN_ERROR',err})
        })
    }
}


export const signOut = () =>{
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();
        firebase.auth().signOut()
        .then(()=>{
            console.log('logout success')
            dispatch({type: 'LOGOUT_SUCCESS'})
        }).catch((err)=>{
            console.log('logout failed')
            dispatch({type: 'LOGOUT_ERROR',err})
        })
    }
} 