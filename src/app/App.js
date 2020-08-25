import React, {} from 'react';
import './App.css';
import { Page } from '../components/page';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from '../pages/home';
import { Contact } from '../pages/contact';
import { Comments } from '../pages/comments';

export const App = () => {

  return (
    <BrowserRouter>
      <div className="App">
        <Page>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/contact" component={Contact} />
            <Route path="/comments" component={Comments} />
          </Switch>
        </Page>
      </div>
    </BrowserRouter>
  );
}