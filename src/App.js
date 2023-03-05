
import './App.css';
import app from './firebase.init';
import {getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut} from 'firebase/auth'
import { useState } from 'react';


const auth = getAuth(app)
function App() {
  const googleProvider = new GoogleAuthProvider();

  const githubProvider = new GithubAuthProvider() ;

  const [user, setUser] = useState({});

  // google signin 
  const handelAddGoogle =() =>{
    signInWithPopup(auth ,googleProvider)
    .then(result =>{
      const user = result.user;
      setUser(user);
      console.log(user);
    })
    .catch(error =>{
      console.log('working');
    })

  }

  // github signin 
 
  const handelGithubSignIn =()=>{
    signInWithPopup(auth, githubProvider)
    .then(result =>{
      const user = result.user;
      setUser(user);
      console.log(user);
    })
    .catch(error =>{
      console.log('working');
    })
  }
  // signout 
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
      { user.uid ?
        <button onClick={handelSignOut}>Sign Out</button>
        :
        <>
          <button onClick={handelAddGoogle}>Google SignIn</button>
          <button onClick={handelGithubSignIn}>Github SignIn</button>
        </>
        
      }
      <br />
      <h3>Name: {user.displayName}</h3>
      <p>Email: {user.email}</p>
      <img src= {user.photoURL} alt="" />
    </div>
  );
}

export default App;
