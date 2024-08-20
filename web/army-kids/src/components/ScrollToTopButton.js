import { useState, useEffect } from "react"
import React from 'react'
import arrow from "../images/arrow_up.png"
import "./ScrollToTopButton.css"

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false)

    const toggleVisibility = () => {
        if(window.pageYOffset > 200) {
            setIsVisible(true)
        } else {
            setIsVisible(false)
        }
    }

    const scrollToTop = () => {
        window.scrollTo({
            top:0,
            behavior: 'smooth'
        })
    }

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility)
        return () => {
            window.removeEventListener('scroll', toggleVisibility)
        }
    }, [])



  return (
    <div className="scroll-to-top">
      {isVisible && (
        <button onClick={scrollToTop}>
            <img src={arrow} alt="" className="icon"/>
        </button>
      )}
    </div>
  )
}

export default ScrollToTopButton
