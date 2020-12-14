import React from 'react'

class Login extends React.Component{
    constructor(){
        super()
        this.state = {
            email: '',
            password: '',
            enableBtn: true,
            emailError: false,
            passwordError: false
        }
    }

    handleEmail = (event) =>{
        this.setState({
            email: event.target.value
        })
    } 

    handlePassword = (event) =>{
        this.setState({
            password: event.target.value
        })
    } 

    onLogin = () => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        console.log("EMAIL ==> ",this.state.email)
        console.log("PASSWORD ==> ",this.state.password)

        if(!re.test(String(this.state.email).toLowerCase())){
            this.setState({
                emailError: true
            })
            return
        }else{
            this.setState({
                emailError: false
            })
        }

        if(this.state.password.length<6){
            this.setState({
                passwordError: true
            })
            return
        }else{
            this.setState({
                passwordError: false
            })
        }

        this.setState({
            email: '',
            password: ''
        })
    }

    render(){
        return(
            <div>
                <h1>Login Form</h1>
                <label>
                    Email <br/>
                    <input value={this.state.email} type="email" placeholder="Enter your email" onChange={this.handleEmail}/>
                </label>
                <label> <br/>
                    Password <br/>
                    <input value={this.state.password} type="password" placeholder="Enter your password" onChange={this.handlePassword}/>
                </label> <br/>
                <p style={{color: 'red'}}>
                    {this.state.emailError ? "Please insert a valid Email": '' }
                    {this.state.passwordError ? "Password must be 6 Character Long": '' }
                </p>
                <button disabled={this.state.email === '' || this.state.password === '' ? true : false} onClick={this.onLogin}>Login</button>
            </div>
        )
    }   
}

export default Login;