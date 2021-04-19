import React, { Component } from 'react'
import { MDBInput } from "mdbreact";
import {Container, Row, Col} from 'react-bootstrap'
import './Register.css'

export default class RegisterBox extends Component {
    constructor() {
        super();
    
        this.state = {
          f_name:"",
          l_name:"",
          email: "",
          password: "",
          confirm_pass:"",
          

        };
      }


      sendForm = async (e) => {
        e.preventDefault();
        console.log(this.state.f_name);
        console.log(this.state.l_name);
        console.log(this.state.email);
        console.log(this.state.password);
        console.log(this.state.confirm_password);


      };













    render() {
        return (
            <div className="container" className="center">
                <div className="main_box bg-white shadow">

                    <h2 className="center Heading">Sign Up</h2>

                    <form className="form-group" onSubmit={this.sendForm}>

                        <div className="row NameRow">
                            <Col>
                                <MDBInput
                                    label="First Name" 
                                    type="text"
                                    name="f_name"
                                    value={this.state.f_name}
                                    onInput={this.handleInput}
                                    id="f_name"
                                    onChange={(e) =>
                                        this.setState({
                                        f_name: e.target.value,
                                        })
                                    }
                                    required
                                />
                            </Col>

                            <Col>
                                <MDBInput
                                    label="Last Name" 
                                    type="text"
                                    name="l_name"
                                    value={this.state.l_name}
                                    onInput={this.handleInput}
                                    id="l_name"
                                    onChange={(e) =>
                                        this.setState({
                                            l_name: e.target.value,
                                        })
                                    }
                                    required
                                />
                                
                            </Col>
                        </div>

                        

                        


                        <MDBInput
                            label="Email" 
                            type="email"
                            name="email"
                            value={this.state.email}
                            onInput={this.handleInput}
                            id="name"
                            onChange={(e) =>
                                this.setState({
                                email: e.target.value,
                                })
                            }
                            required
                         />



                        <MDBInput
                            label="Password"
                            type="password"
                            name="password"
                            value={this.state.password}
                            onInput={this.handleInput}
                            id="password"
                            onChange={(e) =>
                                this.setState({
                                password: e.target.value,
                                })
                            }
                            required
                        />


                        <MDBInput
                            label="Confirm Password"
                            type="password"
                            name="confirm_password"
                            value={this.state.confirm_password}
                            onInput={this.handleInput}
                            id="confirm_password"
                            onChange={(e) =>
                                this.setState({
                                    confirm_password: e.target.value,
                                })
                            }
                            required
                        />





                        <div className = "center pt-4 pb-4">
                        <button type="submit" className="btn btn-dark btn-rounded">Sign Up</button>
                        </div>

                        <p className="center">Already Have an Account?</p>

                        <div className = "center pt-2 pb-4">
                        <a href="/login" type="button" className="btn btn-dark btn-rounded">Login</a>
                        </div>
                        
                    </form>
                </div>             
            </div>
        )
    }
}
