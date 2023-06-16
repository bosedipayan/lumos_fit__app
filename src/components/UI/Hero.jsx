import React from 'react'
import heroImg from '../../assests/images/gym-model.png'
import dumbleIcon from '../../assests/images/dumble.png'
import '../../styles/hero.css'

const Hero = () => {
  return <section id='home'>
    <div className="container">
        <div className="hero__wrapper">
            <div className="hero__content">
                    <h2 className='section__title' data-aos='fade-up' data-aos-duration='2000'>Exercise is the key to a <span className="highlights">Healthy</span> lifestyle.</h2>
                    <p data-aos='fade-up' data-aos-duration='2000' data-aos-delay='100'>
                        Regular physical activity is one of the most important things you can do for your health.
                    </p>

                    <div className="hero__btns"
                    data-aos='fade-up' data-aos-duration='1800' data-aos-delay='200'>
                        <button className="register__btn">Get Started</button>
                        <button className="watch__btn"><span>
                            <i class="ri-play-circle-line"></i>
                        </span>
                        Watch Video 
                        </button>
                    </div>
            </div>

            <div className="hero__img">
                <div className="hero__img-wrapper">
                    <div className="box-01"> 
                        <div className="box-02">
                            <div className="box-03">
                                <div className="box__img">
                                    <img src={heroImg} alt='' />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="heart__rate"
                    data-aos='fade-up' data-aos-duration='2000' data-aos-delay='100'>
                        <h5>Heart Rate</h5>
                        <span><i class="ri-heart-pulse-fill"></i></span>
                        <h6>2567 BM</h6>
                    </div>

                    <div className="gym__location"
                    data-aos='fade-up' data-aos-duration='2000' data-aos-delay='100'>
                        <span><i class="ri-map-pin-2-fill"></i></span>
                        <h5>Find a gym <br/> near you.</h5>
                    </div>

                    <div className="dumble__icon">
                        <img src={dumbleIcon} alt='' />
                    </div>

                </div>
            </div>
        </div>
    </div>
  </section>
}

export default Hero