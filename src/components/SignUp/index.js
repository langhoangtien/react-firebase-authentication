import React,{Component} from 'react';
import {Link,withRouter} from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import {withFirebase} from '../Firebase';
import {compose}from 'recompose';


const SignUpPage = () => (
	<div>
		<SignUpForm />
	</div>
	);

const INITIAL_STATE = {
	username:"",
	email:"",
	passwordOne:"",
	passwordTwo:"",
	error:null
};
class SignUpFormBase extends Component {
	constructor(props){
		super(props);
		this.state = {...INITIAL_STATE};
		console.log(INITIAL_STATE);
	}
	onSubmit = event => {
		event.preventDefault();
		const{username,email,passwordOne} = this.state;
		this.props.firebase.doCreateUserWithEmailAndPassword(email,passwordOne)
		.then(authUser => {
			this.setState({...INITIAL_STATE});
			console.log(INITIAL_STATE);
			console.log(this.state);
			this.props.history.push(ROUTES.HOME);
		})
		.catch(error =>{
			this.setState({error});
		});
		
	};
	onChange = event =>{
		this.setState({[event.target.name]:event.target.value});
	}
	render(){
		const{
			username,
			email,
			passwordOne,
			passwordTwo,
			error
		} = this.state;
		const isInvalid = passwordOne !== passwordTwo || email === "" || username ==="" || passwordOne ==="";
		return(
		<div className="row">
		<div className="col-md-3"></div>
		<div className="col-md-6">
		<form onSubmit={this.onSubmit}>
			<div className="form-group">
				<label htmlFor="username">
				Username:
				</label>
				<input className="form-control" value={username} name="username" 
				onChange={this.onChange} type="text" placeoder="Full Name"/>
			</div>
			<div className="form-group">
				<label htmlFor="email"> 
				Email:
				</label>
				<input className="form-control" value={email} name="email" 
				onChange={this.onChange} type="text" placeoder="Email"/>
			</div>	
			<div className="form-group">
				<label htmlFor="passwordOne">
				Password:
				</label>
				<input className="form-control" value={passwordOne} name="passwordOne" 
				onChange={this.onChange} type="password" placeoder="Password"/>
			</div>	
			<div className="form-group">
				<label htmlFor="passwordTwo">
				Repeat Password:
				</label>
				<input className="form-control" value={passwordTwo} name="passwordTwo" 
				onChange={this.onChange} type="password" placeoder="Password"/>
			</div>	
			<button disabled={isInvalid} className="btn btn-primary">SignUp</button>
			 {error && <div className="alert alert-danger">{error.message}</div>}	
		</form>
		</div>
		</div>
		);
	}
}
const SignUpForm = compose(
  withRouter,
  withFirebase,
)(SignUpFormBase);
const SignUpLink = () => (
  <p>
    Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
  </p>
);

export default SignUpPage;
export {SignUpForm,SignUpLink};