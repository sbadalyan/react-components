import React from 'react';
import Button from '../components/Button.jsx';
import Input from '../components/Input.jsx';


export default class ToDoListView extends React.Component{

	constructor(props){
		super(props);
		 this.state = {		 	
		 	toDoItem:'item2',
		 	toDoItemList:[
			 	{
			 		id:1,
			 		title:'item1'
			 	}
		 	]
		 }
		 this.creatTask = this.creatTask.bind(this);
		 this.updateToDoItem = this.updateToDoItem.bind(this);
		 this.onKeyDown = this.onKeyDown.bind(this);
	}
	creatTask(){
		let toDoItemList = this.state.toDoItemList;
		if(this.state.toDoItem){
			toDoItemList.push({
				id:Date.now(),
				title:this.state.toDoItem
			});
			this.setState({
				toDoItem:'',
				toDoItemList:toDoItemList
			});
		}

	}
	updateToDoItem(value){
		this.setState({
			toDoItem:value
		});
		
	}
	onKeyDown (event){
		if(event.keyCode == 13){
			this.creatTask();
		}
	}
	onChange(itemId, itemTitle){
		let toDoItemList = this.state.toDoItemList;
		let toDoItem = toDoItemList.find((item)=>item.id==itemId);
		toDoItem.title = itemTitle;
		this.setState({
			toDoItemList: toDoItemList
		});
	}
    
    renderItemList(){
    	return this.state.toDoItemList.map(item=>{
    		return(
    			<div key={item.id} className="todo-item">
    				<Input 
    					className="item"
						type="text" 
						placeholder="ToDo list item:"
						value={item.title}
						onChange={(value)=>this.onChange(item.id, value)}
					/>
    				<Button color='danger' size='small' onClick={()=>this.deleteItem(item.id)}>Delete</Button>
    			</div>
    			)
    	})
    }
    deleteItem(itemId){
    	console.log(itemId, 'itemId');
    	let toDoItemList = this.state.toDoItemList;
    	toDoItemList= toDoItemList.filter((item)=>item.id!=itemId);

    	this.setState({
    		toDoItemList: toDoItemList
    	});
    }
    editItem(itemId){
    	this.setState({
    		currentItemId:itemId
    	});
    	console.log(itemId, 'itemId');
    	
    } 
    render(){
    	return(
    		<div>
    			<div className='todo-item'>
					<Input 
						className="item"
						type="text" 
						placeholder="ToDo list item:"
						value={this.state.toDoItem}
						onChange={this.updateToDoItem} 
						onKeyDown={this.onKeyDown}
					/>
	    			<Button onClick={this.creatTask} color="primary" size="small">Add item</Button>
    			</div>
    			{this.renderItemList()}
    		</div>
    		);
    }


}
