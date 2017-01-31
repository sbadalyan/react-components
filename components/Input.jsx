import React from 'react';

export default class Input extends React.Component{
	render(){
		return(
			<div>
				<input 
				 	className={`input ${(this.props.error)?'input-error':''}`}
					name={this.props.name}
					value={this.props.value}
					id={this.props.id}
					placeholder={this.props.placeholder}
					type={this.props.type}
					onChange={(event)=>this.props.onChange(event.target.value)}
				/>
				{this.props.error}
				
			</div>
		);
	}
}