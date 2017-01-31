import React from 'react';
import DropDown from '../components/DropDown.jsx';

export default class DropDownView extends React.Component{

	constructor(props){
		super(props);
		this.state={
			dropDownlabel:'Drop Down Items',
			showDropDown:false,
			items:[
				{
					id:'item1',
					name:'item1'
				},
				{
					id:'item2',
					name:'item2'
				}
			]
		}
	}
	
	render(){
		return(
				<div>
					<DropDown 
						color='primary'
						items={this.state.items}
						dropDownlabel={this.state.dropDownlabel}
						/>
				</div>				
			);
	}

} 