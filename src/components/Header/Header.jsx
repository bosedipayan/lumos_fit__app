import React,{useRef,useEffect} from 'react'
import '../../styles/header.css'
import 'remixicon/fonts/remixicon.css'
import logo from '../../assests/images/dumble.png'


const nav__Links = [
        {
            path: '#home',
            display: 'Home'
        },
        {
            path: '#classes',
            display: 'Classes'
        },
        {
            path: '#schedule',
            display: 'Schedule'
        },
        {
            path: '#pricing-plan',
            display: 'Pricing'
        }
    ];

const Header = () => {

    const headerRef = useRef(null);

    const headerFunc = () => {
        if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80)
        {
            headerRef.current.classList.add('sticky__header');
        }
        else{
            headerRef.current.classList.remove('sticky__header');
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", headerFunc);

        return () => window.addEventListener("scroll", headerFunc);
    },[]);

    const handleClick = (e) => {
        e.preventDefault();

        const targetAttr = e.target.getAttribute('href')
        const location = document.querySelector(targetAttr).offsetTop;


        window.scrollTo({
            left: 0,
            top: location - 80,
        })
    }


  return <header className="header" ref={headerRef}>
    <div className="container">
        <div className="nav__wrapper">
            <div className="logo">
                <div className="logo__img">
                    <img src={logo} alt='' />
                </div>
                <h2>Fit-App</h2>
            </div>

            <div className="navigation">
                <ul className="menu">
                    {
                        nav__Links.map(item=> (
                            <li className="nav__item"><a onClick={handleClick} href={item.path}>
                                {item.display}</a></li>
                        ))
                    }
                </ul>
            </div>

            <div className="nav__right">
                <button className="register__btn">Register</button>
                <span className="mobile__menu">
                    <i class="ri-menu-line"></i>
                </span>
            </div>
        </div>
    </div>
  </header>
}

export default Header