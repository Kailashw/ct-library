
const initState = {
    authError : null,
    redirect : false
}

const authReducer = (state= initState, action) =>{
    switch (action.type){
        case 'LOGIN_ERROR' :
            return {
                ...state,
                authError : 'Login Failed'
            }
        case 'LOGIN_SUCCESS' :
            return {
                ...state,
                authError : null
            }
        case 'LOGOUT_ERROR' :
            return {
                ...state,
                authError : 'Logout Failed'
            }
        case 'LOGIOUT_SUCCESS' :
            return {
                ...state,
                authError : null
            }
        case 'SIGNUP_ERROR' :
            return {
                ...state,
                authError : action.err.message,
                redirect:false
            }
        case 'SIGNUP_SUCCESS' :
            return {
                ...state,
                authError : null,
                redirect : true
            }
        default:
            return state
    }
}

export default authReducer