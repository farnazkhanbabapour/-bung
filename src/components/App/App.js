import React from 'react';
import './App.css';
import Persons from "../Persons/Persons";
import Cockpit from '../Cockpit/Cockpit';

class App extends React.Component{
  state={
    persons:[
      {id:"f", name:"Max", age:"28"},
      {id:"a",name:"Manu" , age:"29"},
      {id:"r",name:"Stephanie" , age:"26" }
    ],
    showPersons:false,
  }
  // clickSwitchHandler= ()=>{
  //   // console.log("hi");
  //   this.state.persons[0].name="Farnaz";
  //   this.setState({ persons:[
  //     { name:"Farnaz", age:"28"},
  //     {name:"Manu" , age:"29"},
  //     {name:"Stephanie" , age:"26" }
  //   ]})
  // }
  changedhandler= (event,id)=>{
    const personIndex=this.state.persons.findIndex(p =>{
      return p.id===id;
    })
    const person={...this.state.persons[personIndex]};
    person.name=event.target.value;
    const persons=[...this.state.persons];
    persons[personIndex]=person;

    this.setState({persons:persons})

  }
  togglePersonHandler=()=>{
    const doesShow= this.state.showPersons;
    this.setState({showPersons: !doesShow});

  }
  deletePersonHandler=(index)=>{
    const persons= [...this.state.persons];
    persons.splice(index,1);
    this.setState({persons: persons})

  }
  render(){
    const style={
      backgroundColor:"white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
    }
    let persons=null;
    if(this.state.showPersons){
      persons= <Persons
              persons={this.state.persons} 
              clicked={this.deletePersonHandler}
              changed={this.changedhandler} />
    }

    return(
      <div className="App" >
      <Cockpit  persons={this.state.persons} toggle={this.togglePersonHandler} />

      {persons}



      </div>


    )
  }
}

export default App;
