import React from 'react';
import Navbar from './components/Navbar'
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from './components/Login';
import MobileList from './components/MobileList'
import Cart from './components/Cart'
import MobileDetails from './components/MobileDetails'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path={'/'} render={() => {
          return <Redirect to={'/mobiles'} />
        }} />
        <Route exact path={'/mobiles'} component={MobileList} />
        <Route exact path={'/mobiles/:id'} component={MobileDetails} />
        <Route exact path={'/cart'} component={Cart} />
        <Route exact path='/login' component={Login} />
      </Switch>
    </div>
  );
}

export default App;
