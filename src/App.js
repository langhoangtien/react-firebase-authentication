import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Home from './components/Home/Home';
import SignIn  from './components/SignIn/SignIn';
// import Main  from './components/Main';
// import style from './css/app.css';
import './css/app.css';
// import style from './css/style.css';
import 'antd/dist/antd.css';

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/signin" component={SignIn} />
    </div>
  </Router>
);



export default App;