import React, {} from 'react';
import './App.css';
import { Page } from '../components/page';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from '../pages/home';
import { Cabinets } from '../pages/services/cabinets';
import { Flooring } from '../pages/services/flooring';
import { Painting } from '../pages/services/painting';
import { Tiling } from '../pages/services/tiling';
import { Recommendations } from '../pages/recommendations';

export const App = () => {

  return (
    <BrowserRouter>
      <div className="App">
        <Page>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/cabinets" component={Cabinets} />
            <Route path="/flooring" component={Flooring} />
            <Route path="/painting" component={Painting} />
            <Route path="/tiling" component={Tiling} />
            <Route path="/recommendations" component={Recommendations} />
          </Switch>
        </Page>
      </div>
    </BrowserRouter>
  );
}
