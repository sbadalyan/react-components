import React from 'react';
import Input from '../components/Input.jsx';
import Button from '../components/Button.jsx';
import Form from '../components/Form.jsx';
import validateService from '../services/validateService.jsx';

export default class RegistrationView extends React.Component{

	constructor(props){
		super(props);

		this.state={
			email: '',
			name:'',
			password:'',
			isSubmitted: false
		}
	}
	onSubmit(e){
		console.log('submit');
		e.preventDefault();
		this.setState({
			isSubmitted:true
		});
	}
	onChange(key, value){
		this.setState({
			[key]: value
		});
	}
	render(){
		return  (
			<div>
				<Form onSubmit={this.onSubmit.bind(this)} >
					<div className='row'>
						<Input 
							type='text' 
							name='name' 
							placeholder='Username:'
							value={this.state.name}
							error={validateService.validate(this.state.name, ['notEmpty'], this.state.isSubmitted)}
							onChange={(value)=>this.onChange('name', value)}
						/>
					</div>
					<div className='row'>
						<Input 
							type='password'
							name='password'
							placeholder='Password:'
							error ={validateService.validate(this.state.password, ['notEmpty', 'password'], this.state.isSubmitted)}
							onChange={(value=>this.onChange('password', value))}
						/>
					</div>
					<div className='row'>
						<Input
							type='text'
							name='email' 
							placeholder='Email:'
							value={this.state.email}
							error={validateService.validate(this.state.email, ['notEmpty', 'email'], this.state.isSubmitted)}
							onChange={(value)=>this.onChange('email', value)}
						/>
					</div>				
					<Button color='primary' size='medium' onClick={this.onSubmit.bind(this)}>Hello World!!!</Button>
				</Form>
			</div>
		);
	}

}




