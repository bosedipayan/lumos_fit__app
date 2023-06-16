import React from 'react'
import '../../styles/footer.css'
import logo from '../../assests/images/dumble.png'


const Footer = () => {

    const year = new Date().getFullYear()
  return <footer className="footer" data-aos='fade-up' data-aos-duration='1500'>
    <div className="container">
        <div className="footer__wrapper">
            <div className="footer__box">
                <div className="logo">
                <div className="logo__img">
                    <img src={logo} alt='' />
                </div>
                <h2>Fit-App</h2>
            </div>

            <p>
                Your one stop destination for health, fitness, body care, etc.
            </p>
            </div>

            <div className="footer__box">
                <h4 className="footer__title">Company</h4>

                <ul className="footer_links">
                    <li><a href="#">Our Program</a></li>
                    <li><a href="#">Our Plan</a></li>
                    <li><a href="#">Become a member</a></li>
                </ul>
            </div>

            <div className="footer__box">
                <h4 className="footer__title">Quick Links</h4>

                <ul className="footer_links">
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">Support</a></li>
                </ul>
            </div>

            <div className="footer__box">
                <h4 className="footer__title">Terms & conditions</h4>

                <ul className="footer_links">
                    <li><a href="#">Privacy policy</a></li>
                    <li><a href="#">Blogs</a></li>
                    <li><a href="#">Security</a></li>
                </ul>
            </div>
        </div>

        <p className="copyright">
            {year} Copyright reseved
        </p>
    </div>
  </footer>
}

export default Footer