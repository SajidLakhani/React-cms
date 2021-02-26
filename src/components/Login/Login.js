import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
class LoginForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username:'',
            password: '',
            errors: {}
        }
    }

    handleSubmition=(e)=>{
        e.preventDefault();
        const data = {username: this.state.username, password: this.state.password}
        fetch("http://127.0.0.1:8000/api/auth/login",{
        method: "post",
        body: JSON.stringify(data),
        headers: {"content-type":"application/json"}
        })
    .then(res=> res.json())
    .then(res=> console.log(res));

        this.props.history.push("/dashboard");
    }
    handleInput=(e)=>{
        e.preventDefault();
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]:value
        })
    }
    render() {
        return (
            <React.Fragment>
            <div className="login-Form-RL container"> 
            
            <div className="container">
                <div className="row">
                <div className="col-md-2"></div>
                    <div className="col-md-8 custom-form LF-color-RL">
                    <div className="HeadTitle text-light"><h1>Login Form</h1></div>
                    <form onSubmit={this.handleSubmition}>
                    <div className="form-group">
                      
                      <input type="text" name="username" onChange={this.handleInput}
                        className="form-control custom-Field" id="" aria-describedby="helpId" placeholder="User Name"/>
                      <small id="helpId" className="form-text text-danger" hidden>Help text</small>
                    </div>
    
                    <div className="form-group">
                      
                      <input type="password" name="password" onChange={this.handleInput}
                        className="form-control custom-Field" id="" aria-describedby="helpId" placeholder="Password"/>
                      <small id="helpId" className="form-text text-danger" hidden>Help text</small>
                    </div>
    
                    <div className="form-group text-center">
                      
                      <button type="submit" className="btn btn-outline-light btn-block btn-lg mt-5">Register</button>
                    </div>
                </form>
                    </div>
                    <div className="col-md-2"></div>
                </div>
            </div>
            
            
            </div>
            </React.Fragment>
        );
    }
}

export default LoginForm;