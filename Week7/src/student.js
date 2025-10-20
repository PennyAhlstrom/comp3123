// Import all the libraries so that the component is connected to the react environment
import React, { Component } from "react"
import PropType from 'prop-types'
import PropTypes from "prop-types"
//https://reactjs.org/docs/typechecking-with-prototypes.html

// Extend the student class with the react component
class Student extends React.Component{
    // Set the default in case there are no values these will be the values
    static defaultProps = {
        //fnm: PropTypes.string.isRequired,
        lmn: "No last name",
        result: "No result",
        city: "Toronto"
    }

    // Initialize all the parameters inside the props (the class components)
    constructor(props){
        super(props)
    }

    // Define the output - return the output here
    // this.props - call/pass the value from the parent file
    // Bring all of the values from the parent file here
    // App.js is the parent of Student.js. 
    // Student.js is a component file of App.js
    render(){
        return(
            <>
                <h2>Welcome to Fullstack Development - I</h2>
                <h3>React JS Programming Week09 Lab exercise</h3>
                <h4>{this.props.sid}</h4>
                <p>{this.props.fnm} {this.props.lnm}</p>
                <p>George Brown College, Toronto</p>
            
            
            </>
        )
    }
}

// Typically these are coming from forms - in future labs we will be creating web forms
Student.propTypes = {
    sid:PropTypes.number,
    fnm: PropTypes.string.isRequired,
    lnm: PropTypes.string.isRequired,
    result: PropTypes.string.isRequired,
    city: PropTypes.string,
}

export default Student