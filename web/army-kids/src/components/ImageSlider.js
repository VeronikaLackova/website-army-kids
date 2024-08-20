import { useCallback, useEffect, useRef, useState } from "react"
import "./ImageSlider.css"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";



const ImageSlider = ({slides}) => {
const timeRef = useRef(null)

    const [currentIndex, setCurrentIndex] = useState(0)

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
    }

    const goToNext = useCallback(() => {
        const isLastSlide = currentIndex === slides.length - 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }, [currentIndex, slides])

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex)
    }


    useEffect(() => {
        if (timeRef.current) {
            clearTimeout(timeRef.current)
        }
        timeRef.current = setTimeout(() => {
            goToNext()
        }, 2000)

        return () => clearTimeout(timeRef.current)
    }, [goToNext])



    return (
        <div className="slider-styles">
            <button className="left-arrow" onClick={goToPrevious}>
                < FaArrowLeft />
            </button>
            <button className="right-arrow" onClick={goToNext}>
                < FaArrowRight />
            </button>
            <div className="slide-styles"
                style={{ backgroundImage: `url(${slides[currentIndex]})`}}>
            </div>
            <div className="dots-container">
                {slides.map((slide, slideIndex) => (
                    <div key={slideIndex} className="dot-style" onClick={() => goToSlide(slideIndex)}>
                        < GoDotFill />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ImageSlider