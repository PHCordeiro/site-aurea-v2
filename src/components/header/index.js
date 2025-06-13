import React, { useState, createRef } from 'react'
import { Link } from "react-router-dom";

import './style.scss'

import logoAurea from '../../imgs/logoHeader1.png'

import 'firebase/compat/auth'

export default function Header(props) {

    const [isChecked, setIsChecked] = useState(false);

    const menuMobile = createRef()

    function showMenuMobile() {

        if (isChecked)
            menuMobile.current.style.display = 'none'
        else
            menuMobile.current.style.display = 'flex'

    }

    const [header, setHeader] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 60) {
            setHeader(true)
        } else {
            setHeader(false)
        }
    }

    window.addEventListener('scroll', changeBackground);

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      };

    return (

        <div>

            <div className='mainHeader'>
                <header className={header ? 'header active' : 'header'}>

                    <div className='logo' >

                        <Link to="/"> <img src={logoAurea} alt="LogoAurea" /> </Link>

                    </div>

                    <div className='menu' >

                        <ul>

                            <li> <Link onClick={scrollToTop} to='/' > Início </Link> </li>
                            {/*<li> <Link onClick={scrollToTop} to='/Processo-Seletivo' > Processo Seletivo 2022.2 </Link> </li> Sempre remover no final do PS */}
                            <li> <Link onClick={scrollToTop} to='/Quem-somos-nos'> Quem Somos </Link> </li>
                            <li> <Link onClick={scrollToTop} to='/Servicos'> Serviços </Link> </li>
                            <li> <Link onClick={scrollToTop} to='/Contato'> Contato </Link> </li>
                            {/*<li> <Link onClick={scrollToTop} to='/Blog'> Blog </Link> </li>*/}

                        </ul>

                    </div>

                    <div className="sandwich" >

                        <input type="checkbox" id="checkbox" onClick={() => {

                            setIsChecked(!isChecked);
                            showMenuMobile()
                            window.scrollTo(0, 0)

                        }} />

                        <label htmlFor="checkbox" >

                            <span></span>
                            <span></span>
                            <span></span>

                        </label>

                    </div>

                </header>

                <div className='menu-mobile' ref={menuMobile} >

                    <ul>

                        <a href="/"> Início </a>
                        {/*<a href="/Processo-Seletivo"> Processo Seletivo 2022.2 </a>  Sempre remover no final do PS */}
                        <a href="/Quem-somos-nos"> Quem Somos </a>
                        <a href="/Servicos"> Serviços </a>
                        <a href="/Contato"> Contato </a>
                        {/*<a href="/Blog"> Blog </a>*/}

                    </ul>

                </div>

            </div>

        </div>

    )
}