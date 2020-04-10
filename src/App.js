import React, { Component } from 'react';
import './App.css';
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import 'bootstrap/dist/css/bootstrap.min.css';
import fire from './Config'
import firebase from 'firebase'
import uuid from 'uuid/v1'

class App extends Component {
  constructor()
  {
    super();
    
  this.state={
    items:[],
    id:uuid(),
    item:'',
    editItem:false
  
  }
 // this.handleChange=this.handleChange.bind(this);




  }


  componentDidMount(){
    const previousNotes=this.state.items;
    const rootRef=fire.database().ref('List')
    const obj={}
    rootRef.on('child_added',snap=>{
      const obj={}
      obj['id']=(snap.key);
      obj['title']=snap.val().title
     // console.log(previousNotes)
      previousNotes.push(obj)
     
      this.setState({
        items:previousNotes
      })
    })
    
    

  }
  
handleChange=(e)=>{
  this.setState({item:e.target.value});
};


clearList=()=>{
  this.setState({items:[]});
  const rootRef=fire.database().ref('List').remove()
}


handleDelete=(id)=>{
  const filteredItems=this.state.items.filter(item=>item.id!==id)
  this.setState({
    items:filteredItems
  })
  const rootRef=fire.database().ref('List')
rootRef.child(id).remove()



}

handleEdit=(id)=>{
  const filteredItems=this.state.items.filter(item=>item.id!==id);
  const selectedItem=this.state.items.find(item=>item.id===id);
  console.log(selectedItem);
  this.setState({
    items:filteredItems,
    item: selectedItem.title,
    editItem:true,
    id:id
  })
  
}



handleSubmit=(e)=>{
e.preventDefault();
const newItem={id:this.state.id,
title:this.state.item}
console.log(newItem);

const rootRef=fire.database().ref('List')
rootRef.child(newItem.id).set({title:newItem.title})


const updatedItems=[...this.state.items,newItem];
this.setState({
  items:updatedItems,
  item:'',
  editItem:false
});
this.setState(prevState=>{
  return {
    id:uuid()
  };
})





}
  render(){
  return (
    <div className="container">
      <div className="row">
      <div className="col-10 mx-auto col-md-8 mt-4">
      <h3 className="text-capitalize text-center">TodoInput</h3>
      <TodoInput item={this.state.item} handleChange={this.handleChange} handleSubmit={this.handleSubmit} editItem={this.state.editItem}/>
      <TodoList items={this.state.items} clearList={this.clearList} handleDelete={this.handleDelete} handleEdit={this.handleEdit}/>
      </div>
      </div>
      </div>
      
  );}
}

export default App;
