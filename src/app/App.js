import React, { useState, useEffect} from 'react';
import './App.css';
import { Page } from '../components/page';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from '../pages/home';
import { About } from '../pages/about';
import { Shop } from '../pages/shop';

export const App = () => {

  return (
    <BrowserRouter>
      <div className="App">
        <Page>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} />
            <Route path="/shop" component={Shop} />
          </Switch>
        </Page>
      </div>
    </BrowserRouter>
  );
}