import React from 'react'
import { useState } from "react"
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../components/firebase"
import { toast } from "react-toastify"
import "./SignUp.css"

import SignInWithGoogle from '../components/SignInWithGoogle'



const SignUp = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async (e) => {
      e.preventDefault()


      try {
        await signInWithEmailAndPassword(auth, email, password)
        console.log("Užívateľ sa úspešne prihlásil");
        window.location.href="/profile"
        toast.success("Užívateľ úspešne prihlásený!", {
          position: "top-center"
        })
      } catch (error) {
        console.log(error.message);
        toast.error(error.message, {
          position: "bottom-center"
        })
      }  
    }


  return (
    <div className='form-container'>
      <form onSubmit={handleSubmit}>
      
        <h1>Prihlásenie</h1>

        <div className='form-name'>
            <div className='form-name-label'>
              <label>Používateľské meno</label>
            </div>
            <input type="email"
                placeholder="Zadajte email"
                className='form-name-input'
                value={email}
                onChange={(e) => setEmail(e.target.value) }
            />
        </div>

        <div className='form-password'>
            <div className='form-password-label'>
              <label>Heslo</label>
            </div>
            <input type="password"
                    className='form-password-input'
                    value={password}
                    onChange={(e) => setPassword(e.target.value) }
            />
        </div>

        <div className='button'>
            <button type="submit">Prihlásiť</button>
        </div>

            <p className='forgot-password'>Nový užívateľ? <a href="/register">Zaregistruj sa</a>
            </p>

            <SignInWithGoogle />

    </form>
  </div>
  )
}

export default SignUp
