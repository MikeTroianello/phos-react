import React from 'react';
import Navbar from '../navbar/Navbar';
import { Route, Switch } from 'react-router-dom';
import Card from '../card/Card';

const Main = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path='/card' render={(props) => <Card {...props} />} />
      </Switch>
    </div>
  );
};

export default Main;
