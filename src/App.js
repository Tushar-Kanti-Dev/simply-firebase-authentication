
import './App.css';
import app from './firebase.init';
import {getAuth, GoogleAuthProvider, signInWithPopup, signOut} from 'firebase/auth'
import { useState } from 'react';


const auth = getAuth(app)
function App() {
  const provider = new GoogleAuthProvider();
  const [user, setUser] = useState({});

  const handelAddGoogle =() =>{
    signInWithPopup(auth ,provider)
    .then(result =>{
      const user = result.user;
      setUser(user);
      console.log(user);
    })
    .catch(error =>{
      console.log('working');
    })

  }
 
  const handelSignOut =() =>{
    signOut(auth)
    .then(()=>{
      setUser({})
    })
    .catch(()=>{
      setUser({})
    })
  }
  return (
    <div className="App">
      <h2>Used firebase in this project</h2>
      { user.email ?
        <button onClick={handelSignOut}>Sign Out</button>
        :
        <button onClick={handelAddGoogle}>Google Sign In</button>
        
      }
      <br />
      <h3>Name: {user.displayName}</h3>
      <p>Email: {user.email}</p>
      <img src= {user.photoURL} alt="" />
    </div>
  );
}

export default App;
