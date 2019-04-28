import React from 'react';
import { BrowserRouter,Switch, Route } from 'react-router-dom'
import NavBar from './components/layout/NavBar'
import DashBoard from '../src/components/dashboard/Dashboard'
import BookDetails from '../src/components/bookstore/BookDetails'
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SingnUp';
import CreateBookStore from './components/bookstore/CreateBookStore';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      {/* <h1> CT Book Library</h1> */}
      <NavBar/>
      <Switch>
        <Route exact path="/" component={DashBoard} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/create" component={CreateBookStore}/>
        <Route path="/bookstore/:id" component={BookDetails} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
