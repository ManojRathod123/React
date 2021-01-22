import React from 'react';
import Menu from './components/Menu';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import User from './User';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Menu />
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/contact" component={Contact}></Route>
          <Route path="/user" component={User}></Route>
         
        </Switch>
      </BrowserRouter>
    </div>
  )
};

export default App;  