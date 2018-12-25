import React,{Component} from 'react';
import {withRouter} from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import {compose} from 'recompose';
import {withFirebase} from '../Firebase';
const SignInPage = () => (
	<div>
	<h1>SignIn</h1>
	<SignInForm/>
	</div>);

const INITIAL_STATE = {
	email:"",
	password:"",
	error:null,
};
class SignInFormBase extends Component{
	constructor(props){
		super(props);
		this.state = {...INITIAL_STATE};
	}

	onChange = (event) => {
		this.setState({[event.target.name]:event.target.value});
	}
	onSubmit = (event)=>{
		const {email,password} = this.state;
		this.props.firebase.doSignInWithEmailAndPassword(email,password)
		.then(()=>{
			this.setState({email,password});
			console.log(this.state);
			this.props.history.push(ROUTES.HOME);
		})
		.catch(error=>{
			this.setState({error});
		})
		event.preventDefault();
	}
	render(){
		const {email,password,error} = this.state;
		const isInvalid = email =="" || password =="";
		return(
				<div className="row">
				<div className="col-md-3"></div>
				<div className="col-md-6">
				<form onSubmit ={this.onSubmit}>
					<div className ="form-group">
					<label htmlFor="email">Email:</label>
					<input 
						name="email" 
						onChange={this.onChange} 
						type="text" 
						className="form-control" 
						value={email}/>
					</div>
					<div className="form-group">
					<label htmlFor="passwordl">Password:</label>
					<input 
						onChange={this.onChange} 
						name="password" 
						type="password" 
						className="form-control" 
						value={password}/>
					</div>
					<button disabled={isInvalid} 
						type="submit" 
						className="btn btn-primary">
						Sign In
					</button>
					{error && <div className="alert alert-danger">{error.message}</div>}	
				</form>
				</div>
				</div>
			);
	
	}
}
const SignInForm = compose(withRouter,withFirebase)(SignInFormBase);
export default SignInPage; 
export {SignInForm};