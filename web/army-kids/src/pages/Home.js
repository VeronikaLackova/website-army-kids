import logo from "../images/uvod.png"
import zakaznici_1 from "../images/zakaznici/zakaznici_1.jpg"
import zakaznici_2 from "../images/zakaznici/zakaznici_2.jpg"
import zakaznici_3 from "../images/zakaznici/zakaznici_3.jpg"
import zakaznici_4 from "../images/zakaznici/zakaznici_4.jpg"
import zakaznici_5 from "../images/zakaznici/zakaznici_5.jpg"
import zakaznici_6 from "../images/zakaznici/zakaznici_6.jpg"
import zakaznici_7 from "../images/zakaznici/zakaznici_7.jpg"
import ImageSlider from "../components/ImageSlider.js"
import "./Home.css"


const Home = () => {
  const slides = [zakaznici_1, zakaznici_2, zakaznici_3, zakaznici_4, zakaznici_5, zakaznici_6, zakaznici_7]


  return <section>

    <div className="logo-container">
      <img src={logo} alt="" />
    </div>
    <div>
      <h2>Spokojný zákazníci</h2>
      <div className="container-style">
        <ImageSlider slides={slides} />
      </div>
    </div>
  </section>
}

export default Home
