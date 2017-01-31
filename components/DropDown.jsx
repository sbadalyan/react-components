import React from 'react';

export  default class DropDown extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			showDropDown:false
		};
		this.focus = false;
		this.labelElement = null;
	}
	getDropDownStyles(){
		if(this.labelElement === null){
			return {};
		}
		const labelRect = this.labelElement.getBoundingClientRect();
		return {
			minWidth:labelRect.width
		};
		
	}

	onShowDropDown(toggleDropDown) {
		this.setState({
			showDropDown:toggleDropDown
		});
	}
	onBlur(){
		this.focus = false;
		setTimeout(() => {
			if(!this.focus){
				this.onShowDropDown(false);
			}
		}, 100)
	}
	onFocus(){
		this.focus = true;
	}
	updateDropDownLabel(label) {
		if(label === null) {
			 return;
		}
		this.labelElement = label;
	}
	renderItem(item){
		return(
				<li 
					onFocus={this.onFocus.bind(this)} 
					onBlur={this.onBlur.bind(this)} 
					key={item.id} tabIndex="0">
					{item.name}
				</li>
			);
	}
	renderItemLsit(){
		return this.props.items.map((item)=>this.renderItem(item));
	}
	
	renderDrpoDownLabel(){
		return(
				<div
					ref={this.updateDropDownLabel.bind(this)}
					className={`dropdown-label color-${this.props.color}`} 
					onClick={() => this.onShowDropDown(!this.state.showDropDown)} 
					onFocus={this.onFocus.bind(this)} 
					onBlur={this.onBlur.bind(this)} tabIndex="0">

					{this.props.dropDownlabel}

				</div>
			)
	}
	render(){
		return(
			<div className='dropdown-wrapper'>
				{this.renderDrpoDownLabel()}
				<ul className={`drop-down-list ${(this.state.showDropDown)?'show':''}`} style={this.getDropDownStyles()}>
					{this.renderItemLsit()}
				</ul>
			</div>
		);
	}
}  
