
import './App.css';
import app from './firebase.init';
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'


const auth = getAuth(app)
function App() {
  const provider = new GoogleAuthProvider();

  const handelAddGoogle =() =>{
    signInWithPopup(auth ,provider)
    .then(result =>{
      const user = result.user;
      console.log(user);
    })
    .catch(error =>{
      console.log('working');
    })

  }
 
  return (
    <div className="App">
      <h2>Used firebase in this project</h2>
      <button onClick={handelAddGoogle}>Google Sign In</button>
    </div>
  );
}

export default App;
