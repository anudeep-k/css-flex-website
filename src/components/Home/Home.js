import React from 'react'
import logo from '../../images/iphone.png';
import  './home.css';

const Home = () => {
    return (
<div>
<section className="presentation">
            <div className="introduction">
                <div className="intro-text">
                    <h1>The new Iphone 12</h1>
                    <p>
                        A14 Bionic, the fastest chip in a smartphone.
                        An edge-to-edge OLED display. Ceramic Shield with four times better drop performance. And Night mode on every camera. iPhone 12 has it all — in two perfect sizes.
                    </p>
                </div>
                {/* <div className="cta">
                    <button className="cta-select" >14 Inch</button>
                    <button className="cta-add">Add To Cart</button>
                </div> */}
               
            </div>
            <div className="cover">
            <img src={logo} alt="logo" />  
    </div>
        </section>

</div>            
    )
}

export default Home
