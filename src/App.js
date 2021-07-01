import React from 'react';
import './App.css';
import Detail from './components/Detail/Detail';
import Home from './components/Home/Home';
import Nav from './components/Nav/Nav';
import Favorites from './components/Favorites/Favorites';

import { Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Nav />
      <Route exact path='/' component={Home} />
      <Route exact path='/favs' component={Favorites} />
      <Route
        path='/movie/:id'
        render={({ match }) => <Detail match={match} />}
      />
    </div>
  );
}

export default App;
