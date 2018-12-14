import React, { Component } from 'react'

const DEFAULT_QUERY = 'redux';
const PATH_BASE = 'https://hn.algolia.com/api/v1';
const PATH_SEARCH = '/search';
const PARAM_SEARCH = 'query=';
const url = `${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${DEFAULT_QUERY}`;
class SignIn extends Component{
	constructor(props){
		super(props);
		this.state = {
			result: null,
			searchTerm: DEFAULT_QUERY,
			};

	}
		componentDidMount() {
		const { searchTerm } = this.state;
		fetch(url)
		.then(response => response.json())
		.then(result => console.log(result.hits))
		.catch(error => error);
		}

	render(){
		return (
			<div>Mimi</div>
			)
	}
}
export default SignIn;