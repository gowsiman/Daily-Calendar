import React, {useEffect, useState} from 'react'
import Login from './components/Login'
import Logo from './components/Logo'
import Welcome from './components/Welcome'

// require('dotenv').config()

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [user, setUser] = useState("");
  
  
  useEffect(()=>{
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = loggedInUser;
      setUser(foundUser);
      setAuthenticated(true)
    }
    
  }, [])

  return (
    <div className="body" >
      <Logo user = {user} authenticated={setAuthenticated} setUser={setUser} />
      {!authenticated && <Login authenticate={setAuthenticated} setuser={setUser} />}
      {authenticated && user!="" && <Welcome user={user} />}
      <footer><a href = "mailto:gowsimanarg19@gmail.com">Report Issues</a></footer>
    </div>
  );
}


export default App;
