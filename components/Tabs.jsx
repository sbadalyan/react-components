import React from 'react';

export default class Tabs extends React.Component{
	renderTab(tab){
		return(
			<div
				className={`tab ${(tab.id==this.props.selectedTabId)?'active':''}`}
				key={tab.id}
				onClick={() => this.props.onChange(tab.id)}
			>
				{tab.name}
			</div>
		);
	}
	renderTabList(){
		return this.props.tabs.map((tab)=>this.renderTab(tab))
	}

	render(){
		return(
			<div className='tabs-wrapper'>
				{this.renderTabList()}
			</div>
		);
	}
}