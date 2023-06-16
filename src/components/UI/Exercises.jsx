import React from 'react'
import '../../styles/exercises.css'
import lunges from '../../assests/images/lunges.png'
import yoga from '../../assests/images/yoga-pose.png'
import extend from '../../assests/images/extended.png'

const Exercises = () => {
  return <section id='schedule'>
    <div className="container exercise__container">
        <div className="exercise__top">
            <h2 className="section__title">Benefits of <span
             className="highlights">Exercise</span> 
            </h2>

            <p>
                Exercise can make you feel happier, can help with weight loss,
                is good for your muscles and bones
            </p>
        </div>

        <div className="exercise__wrapper">
            <div className="exercise__item" data-aos='zoom-in' data-aos-duration='2000'>
                <span className="exercise__icon">
                     <img src={lunges} alt=""  />
                </span>


                <div className="exercise__content">
                    <h4>Healthy Life</h4>

                    <p>
                        A healthy lifestyle can not only help you feel better,
                        but it can also reduce the risk of some diseases.
                    </p>
                </div>
            </div>


            <div className="exercise__item" data-aos='zoom-in' data-aos-duration='2000'>
                <span className="exercise__icon">
                     <img src={yoga} alt=""  />
                </span>


                <div className="exercise__content">
                    <h4>Increases Flexibility</h4>

                    <p>
                        A healthy lifestyle can not only help you feel better,
                        but it can also reduce the risk of some diseases.
                    </p>
                </div>
            </div>


            <div className="exercise__item" data-aos='zoom-in' data-aos-duration='2000'>
                <span className="exercise__icon">
                     <img src={extend} alt=""  />
                </span>


                <div className="exercise__content">
                    <h4>Reduce Blood Pressure</h4>

                    <p>
                        A healthy lifestyle can not only help you feel better,
                        but it can also reduce the risk of some diseases.
                    </p>
                </div>
            </div>

        </div>
    </div>
  </section>
}

export default Exercises