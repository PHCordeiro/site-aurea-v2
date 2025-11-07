import React from "react";
import { Link } from 'react-router-dom';

import Header from '../../components/header';
import Footer from '../../components/footer';

import WhatsappButton from "../../components/whatsappButton";

import planeta from '../../imgs/Planeta.png'

import CartaServicos from "./components/CartaServicos";

import './style.scss'

const services = () => {

    return (

        <div id="body">
            <Header />
                <section id="servicesPage">
                    <div className="headServices">
                        <img src={planeta} alt=""></img>
                        <div className="textHeadServices">
                            <h1>Conheça os nossos serviços!</h1>
                            <p>
                                A Aurea é uma empresa interdisciplinar que oferece uma vasta gama de serviços, realizados por uma equipe capacitada
                                que busca acima de tudo a qualidade do projeto e a experiência do cliente!
                            </p>
                        </div>
                    </div>

                    <CartaServicos />
                    
                </section>
                <WhatsappButton />
            <Footer />
        </div>

    )

}

export default services
