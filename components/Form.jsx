import React from 'react';

export default class Form extends React.Component{
	
	render(){
		return(		
			<form onSubmit={this.props.onSubmit} >
				<input type='submit' style={{display:'none'}}/>
             	{this.props.children}
			</form>
		)
	}
}