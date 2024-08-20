import React from 'react'
import "./SignInWithGoogle.css"
import google from "../images/google.png"
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth, db } from './firebase'
import { setDoc, doc } from 'firebase/firestore';
import { toast } from 'react-toastify'

const SignInWithGoogle = () => {

    function googleLogin(){
        const provider= new GoogleAuthProvider()
        signInWithPopup(auth, provider).then(async (result) => {
            console.log(result);

            const user= result.user 

            if (result.user){
                await setDoc(doc(db, "Users", user.uid), {
                    email: user.email,
                    firstName: user.displayName,
                    photo: user.photoURL,
                    lastName: ""
                  })
                toast.success("Užívateľ sa úspešne prihlásil", {
                    position: "top-center"
                })
                window.location.href = "/profile"
            }
        })
    }

  return (
    <div className='google-sign-in'>

      <p className='continue-p'>--Prihláste sa cez--</p>

      <div onClick={googleLogin}>
        <img src={google} alt="Google logo"/>
      </div>

    </div>
  )
}

export default SignInWithGoogle
