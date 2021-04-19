import React, { Component } from 'react'
import { MDBInput } from "mdbreact";

export default class LoginBox extends Component {


    constructor() {
        super();
    
        this.state = {
          email: "",
          password: "",
        };
      }


      sendForm = async (e) => {
        e.preventDefault();
        console.log(this.state.email);
        console.log(this.state.password);
      };













    render() {
        return (
            <div className="container" className="center">
                <div className=" main_box bg-white shadow">

                     <h2 className="center Heading">Log In</h2>

                    <form className="form-group" onSubmit={this.sendForm}>
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






                        <a href="/forgot_password" style={{ color: "#2D2E6A" }}>
                            Forgot Password
                        </a>


                        <div className = "center pt-4 pb-4">
                        <button type="submit" className="btn btn-dark btn-rounded">Login</button>
                        </div>

                        <p className="center">Don't have any account?</p>

                        <div className = "center pt-2 pb-4">
                        <a href="/register" type="button" className="btn btn-dark btn-rounded">Create Account</a>
                        </div>
                        
                    </form>
                </div>             
            </div>
        )
    }
}
