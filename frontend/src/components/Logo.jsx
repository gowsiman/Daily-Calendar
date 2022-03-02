import React from 'react'
import EventIcon from '@mui/icons-material/Event';
import { Button } from '@mui/material';

function Logo(props){
    function logout(){
        props.setUser("");
        props.authenticated(false);
        localStorage.clear()
    }

    return (
        <nav className="navbar navbar-light">
        <a className="navbar-brand" href="/">
            <img src="https://img.icons8.com/stickers/100/000000/calendar.png"/>
            Daily Calendar
        </a>
        <div>
            {props.user && <Button style={{marginRight:"10px"}} variant="outlined" size = "small" color="error" onClick={logout}>Logout</Button>}
        </div>
        </nav>
    );
}

export default Logo;