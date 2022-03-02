import axios from 'axios';
import React, { useEffect, useState } from 'react'
import GoogleButton from "react-google-button"
import {GoogleLogin} from 'react-google-login'

function SignUp(props){

     
    const [User, setUser] = useState({});
    const [error, setError] = useState("");

    function handleChange(e){
        const {name, value} = e.target;

        setUser((prev)=>{
            return {
                ...prev,
                [name]: value,
            }
        })
    }

    const responseGoogle = async (response) => {
        if (response.profileObj){
            const name = response.profileObj.name
            const email = response.profileObj.email
            await axios.post("https://daily-calendar-project.herokuapp.com/createUser", {name: name, email: email, password1: 'google'})
                .then((response)=>{
                    props.loginUser(true, name)
                    localStorage.setItem('user', response.data.name)
                })
                .catch(error => {
                    console.log(error)
                    setError("User already exists!")
                })
        }
        else{
            setError("Sorry! Couldn't find your account.")
        }
    }

    async function registerUser(e){
        e.preventDefault();
        if (User.password1 && User.password1 === User.password2 && User.name && User.email) {
            setError("")
                await axios.post("https://daily-calendar-project.herokuapp.com/createUser", User)
                .then((response)=>{
                    props.loginUser(true, User.name)
                    localStorage.setItem('user', response.data.name)
                    // console.log(response.data)
                })
                .catch(error => {
                    setError("User already exists!")
                })
           
        }
        else {
            setError("Error! Check your credentials...")
        }
    }

    return (
        <div className="container login-register">
                <div className= "row">
                <h4 style={{marginBottom: "10px"}}>Register</h4>
                <p style={{color: "red", marginBottom: "50px"}}>{error}</p>
                </div>

                <div className="row">
                    <div className="col-md-5">
                        <form className='login-form'>
                            <div className="form-group">
                                <input type="text" onChange={handleChange} className="form-control"  placeholder="Enter Username" name="name"/>
                            </div>
                            <div className="form-group">
                                <input type="email" onChange={handleChange} className="form-control" placeholder="Enter Email" name="email"/>
                            </div>
                            <div className="form-group">
                                <input type="password" onChange={handleChange} className="form-control" placeholder="Enter Password" name="password1" />
                            </div>
                            <div className="form-group">
                                <input type="password" onChange={handleChange} className="form-control" placeholder="Re-Enter Password" name="password2" />
                            </div>
                            <div className="form-group">
                                <button onClick={registerUser} type="submit" className="btn btn-primary">Register</button>
                            </div>
                        </form>
                    </div>

                    <div className= "col-md-2">
                        <p>Or</p>
                    </div>

                    <div className= "col-md-5" >
                        <div className='google-login login-form'>  
                            <GoogleLogin
                                className = "social-login"
                                clientId="470218551034-khleqqs4aka080tb0o37272ij9k1sndb.apps.googleusercontent.com"
                                buttonText="Register with Google"
                                onSuccess={responseGoogle}
                                onFailure={responseGoogle}
                                cookiePolicy={'single_host_origin'}
                            />
                        </div>
                    </div>
                </div>
                
            </div>
        
    );
}

export default SignUp;