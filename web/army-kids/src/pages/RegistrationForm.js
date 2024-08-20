import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from "../components/firebase"
import { setDoc, doc } from 'firebase/firestore';
import { toast } from "react-toastify"
import "./RegistrationForm.css"


const RegistrationForm = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [fname, setFname] = useState("")
  const [lname, setLname] = useState("")


  const handleRegister= async (e) => {
    e.preventDefault()
  

    try {
      await createUserWithEmailAndPassword(auth, email, password)
      const user = auth.currentUser;
      console.log(user);

      if(user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          firstName: fname,
          lastName: lname,
          photo: ""
        })
      }
      console.log("Užívateľ úspešne prihlásený")
      toast.success("Užívateľ úspešne prihlásený!", {
        position: "top-center"
      })
    } catch (error) {
      console.log(error.message)
      toast.error(error.message, {
        position: "bottom-center"
      })
    }
}
  

  return (
    <div className='registration-container'>

      <form onSubmit={handleRegister}> 

        <h1>Chcem byť členom Army kids crew</h1>

          <div className='registration-name'>
            <label>Meno</label>
            <input type="text"
                    className='registration-name-input'
                    onChange={(e) => setFname(e.target.value) }
                    required
            />
          </div>

          <div className='registration-surname'>
            <label>Priezvisko</label>
            <input type="text"
                    className='registration-surname-input'
                    onChange={(e) => setLname(e.target.value) }
            />
          </div>

          <div className='registration-email'>
            <label>Emailová adresa</label>
            <input type="email" 
                    className='registration-email-input'
                    onChange={(e) => setEmail(e.target.value) }  
                    required    
            />
          </div>

          <div className='registration-password'>
            <label>Heslo</label>
            <input type="password"
                    className='registration-password-input'
                    onChange={(e) => setPassword(e.target.value) }
                    required
            />
          </div>

          <div className='button'>
            <button type='submit' className=''>Zaregistrovať</button>
          </div>

          <p className='already-registered'>Ste už zaregistrovaný? Prosím, prihláste sa. <br /> <br />
            <Link to='/prihlasenie'>Prihlásenie</Link>
          </p>

      </form>
    </div>
  )
}

export default RegistrationForm
