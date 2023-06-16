import React from 'react'
import '../../styles/start.css'
import trainer from '../../assests/images/trainer.png'

const Start = () => {
  return <section id='classes'>
    <div className="container">
        <div className="start__wrapper">
            <div className="start__img" >
                <img src={trainer} alt='' data-aos='zoom-left' data-aos-duration='1800' />
            </div>

            <div className="start__content" data-aos='fade-right' data-aos-duration='1500'>
                <h2 className="section__title">
                    Ready to make a <span className="highlights"> change </span>?
                </h2>

                <p>
                    Make a difference in yourself, for the better version of yourself.
                    It is performed for various reasons, including <span className="highlights"> weight loss </span> or maintenance,
                    to aid growth and <span className="highlights"> improve strength </span>, develop muscles and the cardiovascular system, hone athletic skills,
                    <span className="highlights"> improve health </span> or simply for enjoyment.
                </p>

                <button className="register__btn">
                    Get Started
                </button>
            </div>
        </div>
    </div>
  </section>
}

export default Start