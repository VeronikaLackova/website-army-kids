import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from "react";
import { auth } from "./components/firebase"

import Home from "./pages/Home"
import Tshirts from "./pages/Tshirts"
import SweatPants from "./pages/SweatPants"
import Hoodies from "./pages/Hoodies"
import Jackets from "./pages/Jackets"
import Accessories from "./pages/Accessories"
import Error from "./pages/Error"
import SharedLayout from "./pages/SharedLayout"
import OneJacket from "./components/OneJacket"
import OneAccessory from "./components/OneAccessory"
import OneTshirt from "./components/OneTshirt"
import OneSweatPant from "./components/OneSweatPant"
import OneHoodie from "./components/OneHoodie"
import Doprava from "./pages/Doprava"
import Reklamacia from "./pages/Reklamacia"
import Podmienky from "./pages/Podmienky"
import Ochrana from "./pages/Ochrana"
import Vratenie from "./pages/Vratenie"
import RegistrationForm from "./pages/RegistrationForm"
import SignUp from "./pages/SignUp"
import Kosik from "./pages/Kosik"
import ShopContextProvider from "./context/shop-context"
import Profile from "./components/Profile";



const App = () => {

  const [user, setUser] = useState()

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user)
    })
  })

  return <BrowserRouter>
  <ShopContextProvider>
    <Routes>

      <Route path="/" element={ <SharedLayout /> }>
        <Route index element={ <Home /> }/>
        <Route path="/tricka" element={ <Tshirts /> }/>
        <Route path="/teplaky" element={ <SweatPants /> }/>
        <Route path="/mikiny" element={ <Hoodies /> }/>
        <Route path="/bundy" element={ <Jackets /> }/>
        <Route path="/doplnky" element={ <Accessories /> }/>
        <Route path="/all-jackets/:itemId" element={ <OneJacket /> } />
        <Route path="/all-accessories/:itemId" element={ <OneAccessory /> } />
        <Route path="/all-tshirts/:itemId" element={ <OneTshirt /> } />
        <Route path="/all-sweatpants/:itemId" element={ <OneSweatPant /> } />
        <Route path="/all-hoodies/:itemId" element={ <OneHoodie /> } />
        <Route path="/doprava" element={ <Doprava /> } />
        <Route path="/reklamacia" element={ <Reklamacia /> } />
        <Route path="/podmienky" element={ <Podmienky /> } />
        <Route path="/ochrana" element={ <Ochrana /> } />
        <Route path="/vratenie" element={ <Vratenie /> } />
        <Route path="/prihlasenie" element={ user ? <NavLink to="/profile" /> : <SignUp /> } />
        <Route path="/register" element={ <RegistrationForm /> } />
        <Route path="/kosik" element={ <Kosik /> } />
        <Route path="/profile" element={ <Profile /> } />
        

        <Route path="*" element={ <Error /> } />
      </Route>

    </Routes>
    <ToastContainer />
  </ShopContextProvider>
  </BrowserRouter>
}

export default App
