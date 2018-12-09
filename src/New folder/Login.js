import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Button} from 'antd';

class Login extends Component{
	constructor(props){
		super(props)
	}
	render(){
		return(
			<div>
				<Button type="primary"> Login with Facebook </Button>
			</div>
			)
	}
}

export default Login;