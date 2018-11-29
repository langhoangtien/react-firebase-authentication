import React, {Component} from 'react';
import Button from 'antd/lib/button';
import { DatePicker, notification } from 'antd';

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
		console.log(this);
	}
	render() {
		return (
			<div className="row">
				<div className="col-md-4"></div>
				<div className="col-md-4">
					<button className="btn btn-primary" onClick={this.handleClick}>
					Click me
					</button>
					<button className="btn btn-primary" onClick={this.bibiClup }>
					bibiClup
					</button>
				</div>

				<div className="col-md-4">
					<Button type="primary" onClick={openNotification}>Open the notification box</Button>
					<DatePicker />
				</div>
			</div>  
			);
	}
}

export default Home;