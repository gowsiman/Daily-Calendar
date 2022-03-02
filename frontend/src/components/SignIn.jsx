import axios from 'axios';
import React, { useState } from 'react'
import GoogleButton from "react-google-button"
import {GoogleLogin } from 'react-google-login'

function SignIn(props){
    const [error, setError] = useState("");
    const [User, setUser] = useState({
        name: "",
        password: "",
    })

    
    const responseGoogle = async(response) => {
        if (response.profileObj){
            const name = response.profileObj.name
            const email = response.profileObj.email
            await axios.post('https://daily-calendar-project.herokuapp.com/loginUser', {name: name, password: "google"})
            .then((response)=>{
                props.loginUser(true, name)
                localStorage.setItem('user', response.data.name)
            })
            .catch(error => {
                setError("Check your credentials!")
            })
        }
        else{
            setError("Sorry! Couldn't find your account.")
        }
    }
  
    function handleChange(e){
        const {name, value} = e.target; 
        
        setUser(prev=>{
            return {
                ...prev,
                [name]:value,
            }
        })

    }
    async function loginUser(e){
        e.preventDefault()
        
        await axios.post('https://daily-calendar-project.herokuapp.com/loginUser', User)
        .then((response)=>{
            props.loginUser(true, User.name)
            localStorage.setItem('user', response.data.name)
        })
        .catch(error => {
            setError("Check your credentials!")
        })
    }

    return (
        <div className="container login-register">
                <div className= "row">
                <h4 style={{marginBottom: "10px"}}>Log In</h4>
                <p style={{color: "red", marginBottom: "50px"}}>{error}</p>
                </div>

                <div className="row">
                    <div className="col-md-5">
                        <form className='login-form'>
                        
                        <div className="form-group">
                            <input onChange={handleChange} type="text" className="form-control"  name="name" placeholder="Enter Username" value={User.name}/>
                        </div>
                        <div className="form-group">
                            <input onChange={handleChange} type="password" className="form-control" name="password" placeholder="Password" value={User.password}/>
                        </div>
                        <div className="form-group">
                            <button onClick={loginUser} type="submit" className="btn btn-primary">Log In</button>
                        </div>
                        </form>
                    </div>

                    <div className= "col-md-2">
                    <div className='line'></div>                   
                    <p>Or</p>
                    <div className='line'></div>                   
                    </div>

                    <div className= "col-md-5" >
                        <div className='google-login login-form'>  
                            {/* <GoogleButton onClick = {props.handleClick} label = 'Log in with Google'className = "social-login"/> */}
                            <GoogleLogin
                                className = "social-login"
                                clientId="470218551034-khleqqs4aka080tb0o37272ij9k1sndb.apps.googleusercontent.com"
                                buttonText="Log in with Google"
                                onSuccess={responseGoogle}
                                onFailure={responseGoogle}
                                cookiePolicy={'single_host_origin'}
                            />
                        </div>
                    </div>
                </div>
                <div className="signup-btn">
                    <p>Don't Have an Account Yet?</p>
                    <button onClick={e => props.register(false)} type="submit" className="btn btn-primary">Register</button>
                </div>
            </div>
    );
}

export default SignIn;