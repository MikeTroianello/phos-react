import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Card from './components/card/JankyCard';
import CreateCard from './components/createCard/CreateCardForm';
import CreateAccount from './components/account/CreateAccount';
import CreateCollection from './components/collections/CreateCollection';
import AddToCollection from './components/collections/AddToCollection';
import ViewAllCollections from './components/collections/ViewAllCollections';
import Login from './components/account/Login';
import Logout from './components/account/Logout';
import Profile from './components/account/Profile';
import ViewCollection from './components/collections/ViewCollection';

import './App.css';

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' render={(props) => <Home {...props} />} />
      <Route exact path='/card' render={(props) => <Card {...props} />} />
      <Route
        exact
        path='/create-card'
        render={(props) => <CreateCard {...props} />}
      />
      <Route
        exact
        path='/create-collection'
        render={(props) => <CreateCollection {...props} />}
      />
      <Route
        exact
        path='/create-account'
        render={(props) => <CreateAccount {...props} />}
      />
      <Route exact path='/login' render={(props) => <Login {...props} />} />
      <Route exact path='/logout' render={(props) => <Logout {...props} />} />
      <Route
        exact
        path='/collections/all'
        render={(props) => <ViewAllCollections {...props} />}
      />
      <Route
        exact
        path='/collections/:collectionId/add-cards'
        render={(props) => <AddToCollection {...props} />}
      />
      <Route
        exact
        path='/collections/:collectionId/view'
        render={(props) => <ViewCollection {...props} />}
      />
      <Route
        path='/profile/:username'
        render={(props) => <Profile {...props} />}
      />
    </Switch>
  );
};

export default Routes;
