import firebase from 'firebase';
import {useState,useEffect} from 'react';

firebase.initializeApp({
  apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
})
const auth = firebase.auth();

const App = () => {
  const [user,setUser] = useState(null);
useEffect(()=>{
  auth.onAuthStateChanged(person=> {
    if(person){
      setUser(person)
    }
    else{
      setUser(null)
    }
  })
})
const signInWithGoogle = async () =>{
  try{
    await auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
  catch(err){
    console.log(err);
  }
}

  return (
    <div>
        <center>
          {user?
          <div>
           <h1>Welcome to home page </h1>
          <button onClick={()=>auth.signOut()}>Sign Out</button>
          </div>
          :
          <button onClick={signInWithGoogle}>Sign In With Google</button>}
          
        </center>
    </div>
  )
}

export default App

