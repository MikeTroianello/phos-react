import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./components/home/Home";

import Card from "./components/cards/JankyCard";
import CreateCard from "./components/cards/createCard/CreateCardForm";
import CreateAccount from "./components/account/CreateAccount";

import CreateCollection from "./components/collections/collectionActions/CreateCollection";
import AddToCollection from "./components/collections/collectionActions/AddToCollection";
import EditCollection from "./components/collections/collectionActions/EditCollection";
import ViewAllCollections from "./components/collections/viewingCollections/ViewAllCollections";
import ViewCollection from "./components/collections/viewingCollections/ViewCollection";

import Login from "./components/account/Login";
import Logout from "./components/account/Logout";
import Profile from "./components/account/Profile";

import "./App.css";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" render={(props) => <Home {...props} />} />
      <Route exact path="/test" render={(props) => <Card {...props} />} />
      <Route
        exact
        path="/create-card"
        render={(props) => <CreateCard {...props} />}
      />
      <Route
        exact
        path="/create-collection"
        render={(props) => <CreateCollection {...props} />}
      />
      <Route
        exact
        path="/create-account"
        render={(props) => <CreateAccount {...props} />}
      />
      <Route exact path="/login" render={(props) => <Login {...props} />} />
      <Route exact path="/logout" render={(props) => <Logout {...props} />} />
      <Route
        exact
        path="/collections/all"
        render={(props) => <ViewAllCollections {...props} />}
      />
      <Route
        exact
        path="/collections/:collectionId/add-cards"
        render={(props) => <AddToCollection {...props} />}
      />
      <Route
        exact
        path="/collections/:collectionId/view"
        render={(props) => <ViewCollection {...props} />}
      />
      <Route
        exact
        path="/collections/:collectionId/edit"
        render={(props) => <EditCollection {...props} />}
      />
      <Route
        path="/profile/:username"
        render={(props) => <Profile {...props} />}
      />
    </Switch>
  );
};

export default Routes;
