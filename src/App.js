import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import AppBar from './components/AppBar';
import Home from './containers/Home';
import AlbumDetails from './containers/AlbumDetails';

const App = () => {
  return (
    <Fragment>
      <AppBar />
      <main>
        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/album" render={() => <AlbumDetails />} />
      </main>
    </Fragment>
  );
};

export default App;
