import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Menu from "../components/Menu"
import ScrollToTopButton from "../components/ScrollToTopButton"

const SharedLayout = () => {
  return <>
    <Navbar />
    <Menu />
    <Outlet />
    <Footer />
    < ScrollToTopButton />
  </>
}

export default SharedLayout
