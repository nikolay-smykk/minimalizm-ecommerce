import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
      <Router>
          <Switch>
              <Route exact path="/">
                  <Home />
              </Route>
              <Route exact path="/product">
                  <Product />
              </Route>
              <Route exact path="/cart">
                  <Cart />
              </Route>
              <Route exact path="/catalog">
                  <Catalog />
              </Route>
          </Switch>
      </Router>
  );
}

export default App;
