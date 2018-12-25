import React, {Component} from 'react';
import { withFirebase } from '../Firebase';

const SignOutButton = ({firebase}) =>  (
	<button onClick={firebase.doSignOut} className="btn btn-info">Sign Out</button>
	);

export default withFirebase(SignOutButton);