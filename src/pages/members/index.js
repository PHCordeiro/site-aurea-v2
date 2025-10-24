import { React } from 'react';

import Header from '../../components/header'
import Footer from '../../components/footer'
import oPai from '../../imgs/oPai.jpeg'
import Gui from '../../imgs/Gui.jpeg'
import Micaella from '../../imgs/Micaella.jpg'
import Linkedin from "../../imgs/linkedinLogo2.svg"
import Instagram from "../../imgs/instagramLogo2.svg"

import './style.scss'

function Members() {

    return (

        <div id="mainOurMembers">

            <Header />

            <section id="membersFeedbackSection">

                <div className="membersFeedbackIntro">

                    <h1>Conheça nossas lideranças</h1>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos iste facilis eligendi tempore neque, totam quo doloribus deserunt optio unde veritatis? Repudiandae voluptatibus minima delectus iusto aliquid, mollitia amet quidem. Eligendi, vitae! Beatae quisquam, sequi at dolorem voluptas modi temporibus consequatur rem nobis saepe recusandae tempore possimus in quos id et exercitationem aut fugiat expedita nisi nam? Quas animi vel dolores laborum sit voluptatem, recusandae nam officiis. Quis debitis magnam eius repellat asperiores, molestias neque fuga ex quas facere sint eveniet dolorem obcaecati, quibusdam ipsum enim natus? Nam assumenda repellat vel nulla vero dignissimos, explicabo doloribus quaerat, reiciendis ab quos.</p>

                </div>

                <h1>Diretoria Executiva</h1>

                <div className="membersFeedback">

                    <div className="membersCard">

                        <div className="membersFeedbackText">

                            <h3>Aline Maia</h3>

                            <h5>Diretora de Marketing</h5>

                            <p>"Antes da Aurea eu não entendia o porquê de sempre acabar em posições de liderança, ainda que não me identificasse na época. 

                            Foi aqui na empresa que pude me desenvolver enquanto líder, e de fato abraçar todo o potencial que ficou por anos adormecido.


                            Pra mim, a Aurea é sinônimo de descoberta, amizade/família e teste. Foi aqui que conheci boa parte das pessoas que mais admiro, e claro, também aqui enxerguei novas possibilidades profissionais nunca antes pensadas por mim. 

                            Tive oportunidade de unir arquitetura e design, minhas duas paixões, e agregar ainda mais valor com o branding.

                            A Aurea não me fez só uma marketeira de primeira, e certamente plantou as sementes para que eu me torne a mulher que tanto almejo, num futuro breve e em todas as vertentes da vida. 

                            A Aurea é arte, e como artista, sou suspeita pra falar da minha maior paixão."</p>

                            <img draggable="false" src={Gui} alt=""/>

                            <div className="socialMediaMembers">

                                <a href="http://www.siscomex.gov.br/" className="socialMediaWrapper">

                                    <img src={Linkedin} alt="LinkedIn"/>

                                </a>

                                <a href="http://www.siscomex.gov.br/" className="socialMediaWrapper">

                                    <img src={Instagram} alt="Instagram"/>

                                </a>

                                <a href="http://www.siscomex.gov.br/" className="socialMediaWrapper">

                                    <img src={Instagram} alt="Instagram"/>

                                </a>

                            </div>

                        </div>

                    </div>

                    <div className="membersCard">

                        <div className="membersFeedbackText">

                            <h3>The only one 💯 </h3>

                            <h5>Norte Fluminense tem IFF?</h5>

                            <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis minus commodi, eius sed aliquid dolorum sapiente obcaecati accusamus quae possimus voluptatum nisi, tempora aperiam quos cupiditate fugiat ut reiciendis, totam neque fugit? Veritatis, architecto aliquam!"</p>

                            <img draggable="false" src={oPai} alt=""/>

                            <div className="socialMediaMembers">

                                <a href="https://www.linkedin.com/in/higor-brandao" className="socialMediaWrapper">

                                    <img src={Linkedin} alt="LinkedIn"/>

                                </a>

                                <a href="https://instagram.com/higorgbrandao" className="socialMediaWrapper">

                                    <img src={Instagram} alt="Instagram"/>

                                </a>

                                <a href="https://instagram.com/higorgbrandao" className="socialMediaWrapper">

                                    <img src={Instagram} alt="Instagram"/>

                                </a>

                            </div>

                        </div>

                    </div>

                    <div className="membersCard">

                        <div className="membersFeedbackText">

                            <h3>Micaella Condoiselle</h3>

                            <h5>Viciada em Bis</h5>

                            <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis minus commodi, eius sed aliquid dolorum sapiente obcaecati accusamus quae possimus voluptatum nisi, tempora aperiam quos cupiditate fugiat ut reiciendis, totam neque fugit? Veritatis, architecto aliquam!"</p>

                            <img draggable="false" src={Micaella} alt=""/>

                            <div className="socialMediaMembers">

                                <a href="http://www.siscomex.gov.br/" className="socialMediaWrapper">

                                    <img src={Linkedin} alt="LinkedIn"/>

                                </a>

                                <a href="http://www.siscomex.gov.br/" className="socialMediaWrapper">

                                    <img src={Instagram} alt="Instagram"/>

                                </a>

                                <a href="http://www.siscomex.gov.br/" className="socialMediaWrapper">

                                    <img src={Instagram} alt="Instagram"/>

                                </a>

                            </div>

                        </div>

                    </div>

                    <div className="membersCard">

                        <div className="membersFeedbackText">

                            <h3>Micaella Condoiselle</h3>

                            <h5>Viciada em Bis</h5>

                            <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis minus commodi, eius sed aliquid dolorum sapiente obcaecati accusamus quae possimus voluptatum nisi, tempora aperiam quos cupiditate fugiat ut reiciendis, totam neque fugit? Veritatis, architecto aliquam!"</p>

                            <img draggable="false" src={Micaella} alt=""/>

                            <div className="socialMediaMembers">

                                <a href="http://www.siscomex.gov.br/" className="socialMediaWrapper">

                                    <img src={Linkedin} alt="LinkedIn"/>

                                </a>

                                <a href="http://www.siscomex.gov.br/" className="socialMediaWrapper">

                                    <img src={Instagram} alt="Instagram"/>

                                </a>

                                <a href="http://www.siscomex.gov.br/" className="socialMediaWrapper">

                                    <img src={Instagram} alt="Instagram"/>

                                </a>

                            </div>

                        </div>

                    </div>

                    <div className="membersCard">

                        <div className="membersFeedbackText">

                            <h3>Micaella Condoiselle</h3>

                            <h5>Viciada em Bis</h5>

                            <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis minus commodi, eius sed aliquid dolorum sapiente obcaecati accusamus quae possimus voluptatum nisi, tempora aperiam quos cupiditate fugiat ut reiciendis, totam neque fugit? Veritatis, architecto aliquam!"</p>

                            <img draggable="false" src={Micaella} alt=""/>

                            <div className="socialMediaMembers">

                                <a href="http://www.siscomex.gov.br/" className="socialMediaWrapper">

                                    <img src={Linkedin} alt="LinkedIn"/>

                                </a>

                                <a href="http://www.siscomex.gov.br/" className="socialMediaWrapper">

                                    <img src={Instagram} alt="Instagram"/>

                                </a>

                                <a href="http://www.siscomex.gov.br/" className="socialMediaWrapper">

                                    <img src={Instagram} alt="Instagram"/>

                                </a>

                            </div>

                        </div>

                    </div>

                </div>

                <h1>Coordenadoria do Comercial</h1>

                <div className="membersFeedback">

                    <div className="membersCard">

                        <div className="membersFeedbackText">

                            <h3>João Victor Carvalho</h3>

                            <h5>Coordenador de pós-vendas</h5>

                            <p>"A Aurea pra mim foi a oportunidade de virar uma chave na minha vida, hoje me sinto muito mais confiante e capaz de ingressar no mercado de trabalho, pois nessa empresa maravilhosa pude crescer ao lado de pessoas incríveis que estão sempre buscando a melhor versão de si!"</p>

                            <img draggable="false" src={Gui} alt=""/>

                            <div className="socialMediaMembers">

                                <a href="http://www.siscomex.gov.br/" className="socialMediaWrapper">

                                    <img src={Linkedin} alt="LinkedIn"/>

                                </a>

                                <a href="http://www.siscomex.gov.br/" className="socialMediaWrapper">

                                    <img src={Instagram} alt="Instagram"/>

                                </a>

                                <a href="http://www.siscomex.gov.br/" className="socialMediaWrapper">

                                    <img src={Instagram} alt="Instagram"/>

                                </a>

                            </div>

                        </div>

                    </div>

                    <div className="membersCard">

                        <div className="membersFeedbackText">

                            <h3>The only one 💯</h3>

                            <h5>Norte Fluminense tem IFF?</h5>

                            <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis minus commodi, eius sed aliquid dolorum sapiente obcaecati accusamus quae possimus voluptatum nisi, tempora aperiam quos cupiditate fugiat ut reiciendis, totam neque fugit? Veritatis, architecto aliquam!"</p>

                            <img draggable="false" src={oPai} alt=""/>

                            <div className="socialMediaMembers">

                                <a href="https://www.linkedin.com/in/higor-brandao" className="socialMediaWrapper">

                                    <img src={Linkedin} alt="LinkedIn"/>

                                </a>

                                <a href="https://instagram.com/higorgbrandao" className="socialMediaWrapper">

                                    <img src={Instagram} alt="Instagram"/>

                                </a>

                                <a href="https://instagram.com/higorgbrandao" className="socialMediaWrapper">

                                    <img src={Instagram} alt="Instagram"/>

                                </a>

                            </div>

                        </div>

                    </div>

                </div>

                <h1>Coordenadoria de Gente e Gestão</h1>

                <div className="membersFeedback">

                    <div className="membersCard">

                        <div className="membersFeedbackText">

                            <h3>Talita Silva</h3>

                            <h5>Coordenadora de Gente</h5>

                            <p>Ao longo da minha experiência na Aurea pude desenvolver diversos aspectos, tais como um melhor nível de responsabilidade, comunicação, e continuo nessa trajetória de desenvolvimento, cada vez aprendendo mais e mais, o que acho incrível!
                            Dessa forma, para mim, a Aurea significa muito, uma experiência maravilhosa que vou levar por toda minha vida, e que vou poder lembrar com muita felicidade de poder ter sido parte dessa família aureana. Pude adquirir uma nova visão sobre aspectos empresariais e com a experiência de coordenadoria pude também obter um maior senso de responsabilidade, porque passamos a ter que olhar para diferentes assuntos e se empenhar para que os objetivos sejam cumpridos e se tenha uma operacionalização eficiente, contribuindo para o desenvolvimento e  bem estar tanto dos membros quanto da empresa em si.</p>

                            <img draggable="false" src={oPai} alt=""/>

                            <div className="socialMediaMembers">

                                <a href="https://www.linkedin.com/in/higor-brandao" className="socialMediaWrapper">

                                    <img src={Linkedin} alt="LinkedIn"/>

                                </a>

                                <a href="https://instagram.com/higorgbrandao" className="socialMediaWrapper">

                                    <img src={Instagram} alt="Instagram"/>

                                </a>

                                <a href="https://instagram.com/higorgbrandao" className="socialMediaWrapper">

                                    <img src={Instagram} alt="Instagram"/>

                                </a>

                            </div>

                        </div>

                    </div>

                    <div className="membersCard">

                        <div className="membersFeedbackText">

                            <h3>Micaella Condoiselle</h3>

                            <h5>Viciada em Bis</h5>

                            <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis minus commodi, eius sed aliquid dolorum sapiente obcaecati accusamus quae possimus voluptatum nisi, tempora aperiam quos cupiditate fugiat ut reiciendis, totam neque fugit? Veritatis, architecto aliquam!"</p>

                            <img draggable="false" src={Micaella} alt=""/>

                            <div className="socialMediaMembers">

                                <a href="http://www.siscomex.gov.br/" className="socialMediaWrapper">

                                    <img src={Linkedin} alt="LinkedIn"/>

                                </a>

                                <a href="http://www.siscomex.gov.br/" className="socialMediaWrapper">

                                    <img src={Instagram} alt="Instagram"/>

                                </a>

                                <a href="http://www.siscomex.gov.br/" className="socialMediaWrapper">

                                    <img src={Instagram} alt="Instagram"/>

                                </a>

                            </div>

                        </div>

                    </div>

                </div>

                <h1>Coordenadoria de Marketing 🤢🤢</h1>

                <div className="membersFeedback">

                    <div className="membersCard">

                        <div className="membersFeedbackText">

                            <h3>Guiguibas</h3>

                            <h5>Pai do Discord</h5>

                            <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis minus commodi, eius sed aliquid dolorum sapiente obcaecati accusamus quae possimus voluptatum nisi, tempora aperiam quos cupiditate fugiat ut reiciendis, totam neque fugit? Veritatis, architecto aliquam!"</p>

                            <img draggable="false" src={Gui} alt=""/>

                            <div className="socialMediaMembers">

                                <a href="http://www.siscomex.gov.br/" className="socialMediaWrapper">

                                    <img src={Linkedin} alt="LinkedIn"/>

                                </a>

                                <a href="http://www.siscomex.gov.br/" className="socialMediaWrapper">

                                    <img src={Instagram} alt="Instagram"/>

                                </a>

                                <a href="http://www.siscomex.gov.br/" className="socialMediaWrapper">

                                    <img src={Instagram} alt="Instagram"/>

                                </a>

                            </div>

                        </div>

                    </div>

                    <div className="membersCard">

                        <div className="membersFeedbackText">

                            <h3>Micaella Condoiselle</h3>

                            <h5>Viciada em Bis</h5>

                            <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis minus commodi, eius sed aliquid dolorum sapiente obcaecati accusamus quae possimus voluptatum nisi, tempora aperiam quos cupiditate fugiat ut reiciendis, totam neque fugit? Veritatis, architecto aliquam!"</p>

                            <img draggable="false" src={Micaella} alt=""/>

                            <div className="socialMediaMembers">

                                <a href="http://www.siscomex.gov.br/" className="socialMediaWrapper" target="_blank" rel="noreferrer">

                                    <img src={Linkedin} alt="LinkedIn"/>

                                </a>

                                <a href="http://www.siscomex.gov.br/" className="socialMediaWrapper" target="_blank" rel="noreferrer">

                                    <img src={Instagram} alt="Instagram"/>

                                </a>

                                <a href="http://www.siscomex.gov.br/" className="socialMediaWrapper" target="_blank" rel="noreferrer">

                                    <img src={Instagram} alt="Instagram"/>

                                </a>

                            </div>

                        </div>

                    </div>

                </div>

                <h1>Coordenadoria de Projetos</h1>

                <div className="membersFeedback">

                    <div id="cardProjects" className="membersCard">

                        <div className="membersFeedbackText">

                            <h3>Rayssa Alves</h3>

                            <h5>Coordenadora de Arquitetura e Urbanismo</h5>

                            <p>"A Rayssa antes e depois da Aurea. No primeiro processo seletivo para a empresa acabei não passando, mas hoje vejo que não era o momento, revi algumas coisas em mim que precisavam melhorar, e no próximo processo tentei de novo e então passei. Entrei na Aurea com muitas expectativas de crescimento, de um espaço de troca e essas expectativas foram atendidas e superadas até! Eu percebo que quando entrei, tinha uma visão limitada do quão longe eu poderia ir, do quanto eu poderia alcançar, do quanto eu poderia fazer coisas diferentes e aos poucos com os desafios, reuniões, ocupando cargos de gerência, de coordenadoria, fui vencendo meus medos e deixando que esse espaço do medo fosse ocupado por coragem e desejo de crescer ainda mais. 
                            Em menos de um ano passei por experiências incríveis! Tive contato com outras EJs, com clientes, com professores que nos auxiliaram e é notável pra mim o quanto esse momento na empresa fez diferença.
                            A Aurea pra mim representa uma estação muito importante, tanto na minha vida pessoal, quanto profissional, com momentos, superações, mudanças e aprendizados que sempre vou levar comigo."</p>

                            <img draggable="false" src={Gui} alt=""/>

                            <div className="socialMediaMembers">

                                <a href="http://www.siscomex.gov.br/" className="socialMediaWrapper">

                                    <img src={Linkedin} alt="LinkedIn"/>

                                </a>

                                <a href="http://www.siscomex.gov.br/" className="socialMediaWrapper">

                                    <img src={Instagram} alt="Instagram"/>

                                </a>

                                <a href="http://www.siscomex.gov.br/" className="socialMediaWrapper">

                                    <img src={Instagram} alt="Instagram"/>

                                </a>

                            </div>

                        </div>

                    </div>

                    <div id="cardProjects" className="membersCard">

                        <div className="membersFeedbackText">

                            <h3>The only one 💯</h3>

                            <h5>Norte Fluminense tem IFF?</h5>

                            <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis minus commodi, eius sed aliquid dolorum sapiente obcaecati accusamus quae possimus voluptatum nisi, tempora aperiam quos cupiditate fugiat ut reiciendis, totam neque fugit? Veritatis, architecto aliquam!"</p>

                            <img draggable="false" src={oPai} alt=""/>

                            <div className="socialMediaMembers">

                                <a href="https://www.linkedin.com/in/higor-brandao" className="socialMediaWrapper">

                                    <img src={Linkedin} alt="LinkedIn"/>

                                </a>

                                <a href="https://instagram.com/higorgbrandao" className="socialMediaWrapper">

                                    <img src={Instagram} alt="Instagram"/>

                                </a>

                                <a href="https://instagram.com/higorgbrandao" className="socialMediaWrapper">

                                    <img src={Instagram} alt="Instagram"/>

                                </a>

                            </div>

                        </div>

                    </div>

                    <div id="cardProjects" className="membersCard">

                        <div className="membersFeedbackText">

                            <h3>Micaella Condoiselle</h3>

                            <h5>Viciada em Bis</h5>

                            <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis minus commodi, eius sed aliquid dolorum sapiente obcaecati accusamus quae possimus voluptatum nisi, tempora aperiam quos cupiditate fugiat ut reiciendis, totam neque fugit? Veritatis, architecto aliquam!"</p>

                            <img draggable="false" src={Micaella} alt=""/>

                            <div className="socialMediaMembers">

                                <a href="http://www.siscomex.gov.br/" className="socialMediaWrapper">

                                    <img src={Linkedin} alt="LinkedIn"/>

                                </a>

                                <a href="http://www.siscomex.gov.br/" className="socialMediaWrapper">

                                    <img src={Instagram} alt="Instagram"/>

                                </a>

                                <a href="http://www.siscomex.gov.br/" className="socialMediaWrapper">

                                    <img src={Instagram} alt="Instagram"/>

                                </a>

                            </div>

                        </div>

                    </div>

                    <div id="cardProjects" className="membersCard">

                        <div className="membersFeedbackText">

                            <h3>Micaella Condoiselle</h3>

                            <h5>Viciada em Bis</h5>

                            <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis minus commodi, eius sed aliquid dolorum sapiente obcaecati accusamus quae possimus voluptatum nisi, tempora aperiam quos cupiditate fugiat ut reiciendis, totam neque fugit? Veritatis, architecto aliquam!"</p>

                            <img draggable="false" src={Micaella} alt=""/>

                            <div className="socialMediaMembers">

                                <a href="http://www.siscomex.gov.br/" className="socialMediaWrapper">

                                    <img src={Linkedin} alt="LinkedIn"/>

                                </a>

                                <a href="http://www.siscomex.gov.br/" className="socialMediaWrapper">

                                    <img src={Instagram} alt="Instagram"/>

                                </a>

                                <a href="http://www.siscomex.gov.br/" className="socialMediaWrapper">

                                    <img src={Instagram} alt="Instagram"/>

                                </a>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            <Footer />

        </div>

    )

}

export default Members