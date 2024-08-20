import React, { useEffect, useState} from 'react'
import { auth, db } from './firebase';
import { doc, getDoc } from 'firebase/firestore';
import "./Profile.css"


const Profile = () => {

    const [userDetails, setUserDetails] = useState(null)

    const fetchUserData= async () => {
        auth.onAuthStateChanged(async(user) => {
            console.log(user);
            const docRef= doc(db, "Users", user.uid)
            const docSnap = await getDoc(docRef)

            if (docSnap.exists()) {
                setUserDetails(docSnap.data())
                console.log(docSnap.data())
            } else {
                console.log("Používateľ nie je prihlásený")
            }
        })
    }

    useEffect(() => {
        fetchUserData()
    }, []) 

    async function handleLogOut(){
        try {
            await auth.signOut()
            window.location.href = "/prihlasenie"
            console.log("Užívateľ sa úspešne odhlásil!")
        } catch (error) {
        console.error("Error logging out:", error.message)
        }
    }


  return (
    <div className='profile-user'>
        {userDetails ? (
            <>
            <div className='profile-photo'>
                <img src={userDetails.photo} alt="" />
            </div>
                <h1>Vitaj: {userDetails.firstName}</h1>
                <h2>Ďakujeme za registráciu!</h2>

                <hr className='hr-profile'/>

                <div>
                    <p>Email: {userDetails.email}</p>
                    {/* <p>Meno: {userDetails.firstName}</p> */}
                    {/* <p>Priezvisko: {userDetails.lastName}</p> */}
                </div>

                <div className='button-sign-out'>
                    <button onClick={handleLogOut}>Odhlásiť sa</button>
                </div>
            </>
        ) : (
            <p>Načítavanie . . . </p>   
        )}
    </div>
    )
}

export default Profile
