import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import SignOutButton from '../SignOut';

const Navigation = ({authUser}) => (<div>

   {authUser ? <NavigationNonAuth/> : <NavigationAuth/>}

</div>
);
const NavigationAuth = () =>(
  <div className="navbar navbar-expand-lg navbar-light">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item nav-link">
        <Link to={ROUTES.LANDING}>Landing</Link>
      </li>
      <li className="nav-item nav-link">
        <Link to={ROUTES.HOME}>Home</Link>
      </li>
      <li className="nav-item nav-link">
        <Link to={ROUTES.ACCOUNT}>Account</Link>
      </li>
      <li className="nav-item nav-link">
        <Link to={ROUTES.ADMIN}>Admin</Link>
      </li>
      <li className="nav-item nav-link mr-3">
      </li>
    </ul> 
    <SignOutButton/>
  </div>
);
const NavigationNonAuth = () =>(
  <div className="navbar navbar-expand-lg navbar-light">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item nav-link">
        <Link to={ROUTES.SIGN_IN}>Sign In</Link>
      </li>
      <li className="nav-item nav-link">
       <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
      </li>
      <li className="nav-item nav-link">
        <Link to={ROUTES.LANDING}>Landing</Link>
      </li>
    </ul>
  </div>
  )
export default Navigation;