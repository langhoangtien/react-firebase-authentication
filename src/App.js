import React, { Component } from 'react';
import './css/app.css';
// import FormItem from './components/Form/Form';
import { notification } from 'antd';
import 'antd/dist/antd.css';
const list = [
	{
		title: "React",
		description: "BEST JS FRAMEWORK",
		id: 0,
	},
	{
		title: "Codeigniter",
		description: " FASTER 1st PHP FRAMEWORK",
		id: 1,
	},
	{
		title: "Spring",
		description: "BEST JAVA'FRAMEWORK ",
		id: 3,
	},
	{
		title: "RUBY",
		description: "FP LANGUAGE",
		id: 5,
	},
	{
		title: "JAVASCRIPT",
		description: "BEST OOP PROGRAM LANGUAGE",
		id: 4,
	},
	{
		title: "JAVA",
		description: "BEST OOP PROGRAM LANGUAGE",
		id: 3,
	}
];

const users = ['Robin', 'Andrew', 'Dan'];
const [
userOne,
userTwo,
] = users;
console.log(userOne, userTwo);

const isSearched = item => {
	// console.log(item);
	item.title.toLowerCase().includes('react');
}

const noneStyle = {
		display: "none"
	};
class App extends Component {
	constructor(props){
		super(props)
		this.state = {
			list,
			searchTerm: "",
		}

		this.onSearchChange = this.onSearchChange.bind(this);
	
	}
	

	Notice() {
		notification.success({
			message: 'Thông báo',
			description: 'Xóa thành công',
		});
	}
	onDismiss(id){
		const isNotId = item => item.id !== id;
		const updateList = this.state.list.filter(isNotId);
		this.setState({
			list:updateList,
		});
		this.Notice();
	}

	newDisMiss(id){
		const isNotId = item => item.id !== id;
		const updateList = this.state.list.filter(isNotId);
		this.setState({
			list:updateList,
		});
	}
	onSearchChange(e){
		// isSearched()
		this.setState({searchTerm: e.target.value });
	}
	render(){
			return (
				<div className="container">
				<div className="row">
			{this.state.list.map((item,index) => {

			const HandleDisMiss = () =>{
				this.onDismiss(item.id);
			}	
			return(			
				<div key={index} className="col-md-4">
				<h3>{item.title}</h3>
				<p>{item.description}</p>
				<button className="btn btn-primary" onClick ={() => this.onDismiss(item.id)}> 
				Remove Item 
				</button>	
				<button className="btn btn-primary"> 
				Alert
				</button>
				<button style={noneStyle}  className="btn btn-primary" onClick ={HandleDisMiss}> 
				HandleDisMiss
				</button>
				<button className="btn btn-primary" onClick ={this.newDisMiss.bind(this,item.id)}> 
				newDisMiss
				</button>
							
				</div>	
				);			
			})
		}

			<div className="col-md-12">
			<label htmlFor="search">Search</label>
			<input name="search" onChange={this.onSearchChange} className="form-control" type="text" />
			{console.log(this.state.list.filter(isSearched(this.state.searchTerm)))
		}
			</div>
			</div>
			</div>
				);
						
	}

}
export default App;