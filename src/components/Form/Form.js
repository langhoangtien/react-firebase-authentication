// import { Button } from 'antd'
import React, { Component } from 'react';
// import FormErorr from './FormErorr';


class FormItem extends Component{
	constructor(props){
		super(props);
		this.state = {
			email:"",
			password: "",
			formErorr:{email:"",password:""},
			emailValid:"",
			passwordValid: "",
			submitValid: "",
			searchTerm: ""
		}
		this.handleSubmit = this.handleSubmit.bind(this);
		this.onSearchChange = this.onSearchChange.bind(this);
	}
	handleChange(event){
		this.setState({
			[event.target.name]: event.target.value});
	}
	handleSubmit(event){
		console.log(this.state);
		event.prevenDefault();
		
	}
	
	render(){
		return (
		<form onSubmit = {this.handleSubmit}>
		<div className="form-group">
		<label htmlFor="email">Email</label>
		<input name="email" onChange={this.handleChange.bind(this)} className="form-control" value={this.state.email} type="text" />
		</div>
		<div className="form-group">
		<label htmlFor="password">Password</label>
		<input name="password" onChange={this.handleChange.bind(this)} className="form-control" value={this.state.password} type="password" />
		
		</div>
		<input value="submit" type="submit" className="btn btn-success"/>
		</form>
		);
	}
}

export default FormItem;