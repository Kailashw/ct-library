import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './store/reducers/rootReducer'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';

// create store with root reducer.
const store = createStore(rootReducer,applyMiddleware(thunk))

// wrapping App with store.
const AppMain = () =>{
    return (
        <Provider store={store}>
            <App/>
        </Provider>
    )
}

ReactDOM.render(<AppMain />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
