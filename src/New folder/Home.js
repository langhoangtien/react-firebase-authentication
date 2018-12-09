import React, {Component} from 'react';
// 
import {Button, DatePicker, notification, Modal } from 'antd';
import Info  from '../components/Info';
// import Main  from '../components/Main';

const confirm = Modal.confirm;
const openNotification = () => {
  notification.success({
    message: 'Thông báo',
    description: 'Cập nhật thành công',
    className:'success'
  });
};

class Home extends Component{
	constructor(props){
		super(props)
		this.bibiClup = this.bibiClup.bind(this)
	}
	handleClick = () => {
		console.log(this);
	}

	bibiClup(){
		confirm({
			title: 'Are you want to delete this Task?',
			content: 'This is a danger acion',
			onOk(){
				notification.success({
					message: 'Notice',
					description:'The Task has been deleted!'
				})
			}
		})
	}
	render() {
		return (
			<div className="row">
				<div className="col-md-4"></div>
				<div className="col-md-4">
					<Button type="primary" onClick={this.handleClick}> Click here </Button>	
					<Button type="danger" onClick={this.bibiClup }>
					bibiClup
					</Button>
				</div>

				<div className="col-md-4">
					<Button type="primary" onClick={openNotification}>Open the notification box</Button>
					<DatePicker />
					<Info />
				</div>
			</div>  
			);
	}
}

export default Home;