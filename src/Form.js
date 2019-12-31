import React, { Component } from 'react'
import { render } from '@testing-library/react'

class Form extends Component {
    constructor(props) {
        super(props)

        this.initialState = {
            name: '',
            job: '',
        }

        this.state = this.initialState  
    }

    handleChange = event => {
        const {name, value} = event.target
    
        this.setState({
            [name]:value,
        })
    }

    submitForm = () =>{
        this.props.handleSubmit(this.state)
        this.setState(this.initialState)
    }

    render(){
        const {name, job} = this.state;
    
        return(
            <form>
                <label for = "name">Name</label>
                <input
                    type = "text"
                    name = "name"
                    id = "name"
                    value = {name}
                    onChange = {this.handleChange}
                ></input>
                <label for = "job">Job</label>
                <input
                    type="text"
                    name="job"
                    id="job"
                    value={job}
                    onChange={this.handleChange}
                ></input>
                <input type = "button" value = "Add User" onClick = {this.submitForm}></input>
            </form>
        )
    }
}

export default Form