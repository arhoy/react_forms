import React, { Component } from 'react';
import Form from '../UI/Form/Form';

class SignUp extends Component {
    state = {
        formData:{
            name:{
                element:'input',
                value: '',
                label: true,
                labelText: 'Name',
                config: {
                    name: 'name_input',
                    placeholder:'Enter Name'
                }
            },
            lastname:{
                element:'input',
                value: '',
                label: true,
                labelText: 'Name',
                config: {
                    name: 'lastname_input',
                    placeholder:'Enter Last Name'
                }
            }
        }
    }
    onChangeHandler = (e)=>{
        let firstname = {...this.state.firstname};
        firstname = e.target.value;
        this.setState({firstname})
      
    }
    submitEventHandler = (e) =>{
        e.preventDefault();
        console.log(this.state);
    }
    render() {
     
        return (
            <div className = "container">
              <Form
                  onSubmit = {this.submitEventHandler}
                  onChange = {this.onChangeHandler}
                  data = {this.state.formData}
                  buttonName = "submit form"
              />
            </div>
        );
    }
}

export default SignUp;