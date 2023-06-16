import React from 'react'
import '../../styles/pricing.css'

const Pricing = () => {
  return <section id='pricing-plan'>
    <div className="container">
        <div className="pricing__top">
            <h2 className="section__title">Gym <span className="highlights">Pricing</span> plan </h2>
        </div>

        <div className="pricing__wrapper">
            <div className="pricing__item" data-aos='fade-left' data-aos-duration='1500'>
                <div className="pricing__card-top">
                    <h2 className="section__title">Regular Member</h2>
                    <h2 className="pricing section__title">$50 <span> /month </span></h2>
                </div>

                <div className="services">
                    <ul>
                        <li><span><i class="ri-arrow-right-line"></i> Unlimited access to gym</span></li>
                        <li><span><i class="ri-arrow-right-line"></i> Customer Support</span></li>
                    </ul>

                    <button className="register__btn">
                        Join Now
                    </button>
                </div>
            </div>


            <div className="pricing__item pricing__item-02" data-aos='fade-up' data-aos-duration='1500'>
                <div className="pricing__card-top">
                    <h2 className="section__title">Premium Member</h2>
                    <h2 className="pricing section__title">$75 <span> /month </span></h2>
                </div>

                <div className="services">
                    <ul>
                        <li><span><i class="ri-arrow-right-line"></i> Unlimited access to gym</span></li>
                        <li><span><i class="ri-arrow-right-line"></i> Personal Trainer</span></li>
                        <li><span><i class="ri-arrow-right-line"></i> Standard Options</span></li>
                        <li><span><i class="ri-arrow-right-line"></i> Customer Support</span></li>
                    </ul>

                    <button className="register__btn">
                        Join Now
                    </button>
                </div>
            </div>


            <div className="pricing__item" data-aos='fade-right' data-aos-duration='1500'>
                <div className="pricing__card-top">
                    <h2 className="section__title">Standard Member</h2>
                    <h2 className="pricing section__title">$100 <span> /month </span></h2>
                </div>

                <div className="services">
                    <ul>
                        <li><span><i class="ri-arrow-right-line"></i> Unlimited access to gym</span></li>
                        <li><span><i class="ri-arrow-right-line"></i> Personal Trainer</span></li>
                        <li><span><i class="ri-arrow-right-line"></i> Standard Options</span></li>
                        <li><span><i class="ri-arrow-right-line"></i> Customer Support</span></li>
                        <li><span><i class="ri-arrow-right-line"></i> Individual sessions per week</span></li>
                        <li><span><i class="ri-arrow-right-line"></i> Workouts with Meditation Sesssions</span></li>
                    </ul>

                    <button className="register__btn">
                        Join Now
                    </button>
                </div>
            </div>
        </div>
    </div>
  </section>
}

export default Pricing