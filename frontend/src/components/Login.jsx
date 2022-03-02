import React, {useState} from 'react'
import SignIn from './SignIn';
import SignUp from './SignUp';

function Login(props){
    const [registered, setRegistered] = useState(true);
    function loginUser(arg1, arg2) {
        props.authenticate(arg1);
        props.setuser(arg2)
    }
    return (
            <div className='loginPage'>
                {registered && <SignIn loginUser={loginUser}  register={setRegistered}/>}
                {!registered && <SignUp loginUser={loginUser}  />}
            </div>
    );
}

export default Login;