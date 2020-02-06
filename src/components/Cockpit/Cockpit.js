import React from "react";
import classes from  './Cockpit.css';

const Cockpit=(props) =>{
    const assignedClasses=[];
    // let btnClass=" ";
    // if(props.showPersons){
    //     // btnClass= classes.Red;
    // }
   
    if(props.persons.Length<=2) {
        assignedClasses.push(classes.red);
    }
    if(props.persons.Length<=1) {
        assignedClasses.push(classes.bold);
    }

    return(
        <div className={classes.Cockpit}>
            <h1>Hi I am  React App</h1>
            <p className={assignedClasses.join( ' ' ) }>This is really working</p>
            <button onClick={props.toggle}> Switch Name</button>

        </div>
    );
}
export default Cockpit; 