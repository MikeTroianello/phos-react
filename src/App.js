import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Card from './components/card/Card';
import CreateCard from './components/createCard/CreateCard';

import './App.css';

const App = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path='/' render={(props) => <Home {...props} />} />
        <Route exact path='/card' render={(props) => <Card {...props} />} />
        <Route
          exact
          path='/create-card'
          render={(props) => <CreateCard {...props} />}
        />
      </Switch>
    </div>
  );
};

export default App;
