import authReducer from './authReducer'
import bookStoreReducer from './bookStoreReducer'
import {combineReducers} from 'redux'
import { firestoreReducer } from 'redux-firestore'
import {firebaseReducer} from 'react-redux-firebase'


const rootReducer = combineReducers({
    auth : authReducer,
    books : bookStoreReducer,
    firestore : firestoreReducer,
    firebase : firebaseReducer
})


export default rootReducer