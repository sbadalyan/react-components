import React from 'react';
import Button from '../components/Button.jsx';

export  default class  ButtonsView extends React.Component{
	
	render(){
		return (
			<div>
				<div className="row">
					<Button color="primary" size="small">Hello World!!!</Button>
				</div>
				<div className="row">
					<Button color="success" size="medium">Hello World!!!</Button>
				</div>
				<div className="row">
					<Button color="warning" size="big">Hello World!!!</Button>
				</div>
			</div>
		)
	}
	
}