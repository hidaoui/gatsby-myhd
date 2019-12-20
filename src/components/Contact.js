import React, { Component } from 'react'
import axios from 'axios'


export default class Contact extends Component {

    constructor(props){
        super(props)

        this.state={
            nameField:'',
            emailField:'',
            descField:''
        }

    }
    changeHandler=e => {
        this.setState({[e.target.name]:e.target.value})
    }
    submitHandler=e=>{

        e.preventDefault()
        /*
        console.log(this.state)
        axios.post(process.env.MYHD_API_URL+'/api_jobs',this.state).then(response=>{
            console.log(response)
        }).catch(error=>{
            console.log(error)
        });
            */
        
        const config = {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            }
        }
        /*
        axios.post(process.env.MYHD_API_URL+'/api_jobs', this.state,config)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
          */
          
    }
    render() {
        const {nameField,emailField,descField}=this.state;
        return (
            <div className="container-fluid">
            <form onSubmit={this.submitHandler}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" id="name" name="nameField" value={nameField} placeholder="john smith" onChange={this.changeHandler} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control" id="email" name="emailField" value={emailField} placeholder="email@email.com" onChange={this.changeHandler}/>
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea className="form-control" id="description" rows="3" name="descField" value={descField} placeholder="your description" onChange={this.changeHandler}></textarea>
                </div>
                <button type="submit" className="btn btn-primary btn-block mt-5" >submit</button>
            </form>
            </div>
        )
    }
}

