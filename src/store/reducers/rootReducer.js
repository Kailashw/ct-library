import authReducer from './authReducer'
import bookStoreReducer from './bookStoreReducer'
import {combineReducers} from 'redux'


const rootReducer = combineReducers({
    auth : authReducer,
    books : bookStoreReducer
})


export default rootReducer