import authReducer from './authReducer'
import bookStoreReducer from './bookStoreReducer'
import {combineReducers} from 'redux'
import { firestoreReducer } from 'redux-firestore'


const rootReducer = combineReducers({
    auth : authReducer,
    books : bookStoreReducer,
    firestore : firestoreReducer
})


export default rootReducer