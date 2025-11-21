import React from 'react'
import { Link } from "react-router-dom";

import './style.scss'

import instagramIcon from '../../imgs/instagramIcon.png'
import facebookIcon from '../../imgs/facebookIcon.png'
import linkedinIcon from '../../imgs/linkedinIcon.png'
import logoAurea from '../../imgs/logoAurea2.png'
{/*import mascote from '../../imgs/AureaMascote1.png'
import balaodefala from '../../imgs/balaodefala3.png'*/}

export default function Footer (props) {


    return (

        <footer>

            <div className="rowObjects">

                <div className="rowObjects">

                    <div className="logoFooter" >


                        <img src={logoAurea} alt='logoAurea' />


                    </div>


                    <div classname="buttonContato">
                            <a className="cta" href="https://wa.me/5522998157124" target="_blank" rel="noreferrer">
                                <span className='textButton'>  FALE CONOSCO</span>
                                <span>
                                <svg width="66px" height="43px" viewBox="0 0 66 43" xmlns="http://www.w3.org/2000/svg">
                                    <g id="arrow" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                        <path className="one" d="M40.1543933,3.89485454 L43.9763149,0.139296592 ..." fill="#FFFFFF"/>
                                        <path className="two" d="M20.1543933,3.89485454 L23.9763149,0.139296592 ..." fill="#FFFFFF"/>
                                        <path className="three" d="M0.154393339,3.89485454 L3.97631488,0.139296592 ..." fill="#FFFFFF"/>
                                    </g>
                                    </svg>
                                </span> 
                            </a>
                    </div>

                    <div className='adress' >

                        <p>Endereço: R. Dr. Siqueira, 273 - Parque Dom Bosco, Campos dos Goytacazes - RJ, 28030-130 <br/> IFF Sala B-120</p>    

                        <p>Whatsapp: (22) 99815-7124</p>

                        <p>CNPJ: 27.447.124/0001-76</p>

                        <div className="socialMedia">
                            <a href='https://www.instagram.com/aureaemp.iff?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' target="_blank" rel="noreferrer" class="espacologos"> <img src={instagramIcon} alt='logoInstagram' /> </a>
                            <a href='https://www.facebook.com/aureaej' target="_blank" rel="noreferrer" class="espacologos"> <img src={facebookIcon} alt='logoFacebook' /> </a>
                            <a href='https://www.linkedin.com/company/aureaej/'  target="_blank" rel="noreferrer" class="espacologos"> <img src={linkedinIcon} alt='logoLinkedin' /> </a>
                        </div>

                    </div>

                </div>


            </div>

            <div className="copyright">
                <h1>Desenvolvido com React.js © 2021 Aurea Empresa Júnior</h1>
            </div>


        </footer>

    )
}
