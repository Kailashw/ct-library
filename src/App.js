import React from 'react';
import { BrowserRouter,Switch, Route } from 'react-router-dom'
import NavBar from './components/layout/NavBar'
import DashBoard from '../src/components/dashboard/Dashboard'
import BookDetails from '../src/components/bookstore/BookDetails'
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreateBookStore from './components/bookstore/CreateBookStore';
import PrivateRoutes from './components/routes/PrivateRoutes';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      {/* <h1> CT Book Library</h1> */}
      <NavBar/>
      <Switch>
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <PrivateRoutes path="/create" component={CreateBookStore}/>
        <PrivateRoutes path="/bookstore/:id" component={BookDetails} />
        <PrivateRoutes exact path="/" component={DashBoard} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
