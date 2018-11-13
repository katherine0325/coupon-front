import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from './pages/Home/Home';
import Filter form './pages/Filter/Filter';

const AppRouter = () => (
  <Router>
    <div>
      <Route path="/" exact component={Home} />
      <Route path='/filter' component={Filter} />
    </div>
  </Router>
);

export default AppRouter;