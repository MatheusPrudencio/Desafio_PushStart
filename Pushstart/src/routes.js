import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import CriaMatriz from './pages/CriaMatriz';
import AddObjs from './pages/AddObjs';
import ExibeMatriz from './pages/ExibeMatriz';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={CriaMatriz} />
        <Route path="/addObjs" component={AddObjs} />
        <Route path="/exibeMatriz" component={ExibeMatriz} />
      </Switch>
    </BrowserRouter>
  );
}