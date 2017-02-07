import React from 'react';
import ReactDOM from 'react-dom';
import Tabs from '../components/Tabs.jsx';
import ButtonsView from './ButtonsView.jsx';
import DropDownView from './DropDownView.jsx';
import ToDoListView from './ToDoListView.jsx';
import SliderView from './SliderView.jsx';
import RegistrationView from './RegistrationView.jsx'

export default class TabView extends React.Component{
	constructor(props){
		super(props);
		this.state={
			selectedTabId:'tab1',
			tabs:[
		 		{
		 			name:'Buttons',
		 			id:'tab1'
		 		},
		 		{
		 			name:'DropDown menu',
		 			id:'tab2'
		 		},
		 		{
		 			name:'To do list',
		 			id:'tab3'
		 		},
		 		{
		 			name:'Registration',
		 			id:'tab4'
		 		},
				{
					name:'Slider',
					id:'tab5'
				}
		 	]
		 } 
	}
	onChange(selected){
		this.setState({
			selectedTabId:selected
		})
	}

	renderContent() {
		switch(this.state.selectedTabId){
			case 'tab1': {
				return <ButtonsView/>
			}
			case 'tab2':{
				return <DropDownView/>
			}
			case 'tab3':{
				return <ToDoListView/>
			}
			case 'tab4':{
				return <RegistrationView/>
			}
			case 'tab5':{
				return <SliderView/>
			}
		}
	}

	render(){
		return(
			<div>
				<Tabs 
					tabs={this.state.tabs} 
					selectedTabId={this.state.selectedTabId} 
					onChange={(tabId) => this.onChange(tabId)}
				/>
				{this.renderContent()}
			</div>
		);
	}


}
