import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './components/Home';
import Login  from './components/Login';
import Main  from './components/Main';
import style from './css/app.css';

const App = () => (
  <Router>
    <div>
      <Header />

      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/main" component={Main} />
    </div>
  </Router>
);


const Header =()=>(
  <link rel="stylesheet" type="text/css" href="css/app.css" />
);

export default App;