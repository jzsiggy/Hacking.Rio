import React from 'react';
import Form from './components/form/Form';
import Home from './components/home/Home';
import Done from './components/done/Done';


import { Route , Switch } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/forms" component={Form} />
      <Route path="/done" component={Done} />
    </Switch>
  );
}

export default App;
