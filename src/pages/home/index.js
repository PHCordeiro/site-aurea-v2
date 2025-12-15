import { React } from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/header'
import Footer from '../../components/footer'
import WhatsappButton from "../../components/whatsappButton"
/*import Poupup from "../../components/popup"  Sempre remover no final do PS */

import Astronauta1 from '../../imgs/Astronauta4.png'
import astronauta from '../../imgs/astronauta.png'
import LuaRoxo from '../../imgs/luaRoxa.png'
import BJ from '../../imgs/ParceirosBJ.png'
import IFF from '../../imgs/ParceirosIFF.png'
import RJ from '../../imgs/ParceirosRJ.png'
import VOITTO from '../../imgs/ParceirosVoitto.png'
import logoEmbrapii from '../../imgs/Logo-embrapi-1.png'
// import ApsisLogo from '../../imgs/apsislogo.png'
import sicooblogo from '../../imgs/marca_sicoob_branca.png'
import EJCM from '../../imgs/ParceirosEJCM.svg'

import './style.scss'

function Home() {

    return (

        <div id="mainHome">

            <Header />

            <section id="heroSection">

                <div className="heroWrapper">

                    <div className="heroTitle">

                        <h1> O QUE PODEMOS ALCANÇAR JUNTOS? </h1>
                        {/* <h1> ALCANÇAR JUNTOS? </h1> */}

                        <h2> Empresa Júnior referência na região Norte Fluminense </h2>

                        <div className="heroData">
                            <div className="heroCard">
                                <p> +70 </p>
                                <b>Vidas impactadas</b>
                            </div>
                            <div className="heroCard">
                                <p> +70 </p>
                                <b> Sonhos realizados </b>
                            </div>
                            <div className="heroCard">
                                <p> 100% </p>
                                <b> Clientes satisfeitos </b>
                            </div>
                        </div>

                    </div>

                    <div className="heroImgWrapper">

                       {/* <img draggable="false" src={Astronauta1} alt="" />*/}

                    </div>

                </div>

            </section>

            <section id="services">

                <h1> CONHEÇA NOSSOS SERVIÇOS </h1>
                <p>Serviços de preço Júnior, com qualidade Sênior</p>

                <div className="rowObjects">

                    <div className="servicesImgWrapper">

                        {/*<img draggable="false" src={astronauta} alt="" />*/}

                    </div>

                    <div className="collumnObjects">
                        <div className="sectorServicearq">
                            <h2> Arquitetura e Urbanismo </h2>
                            <h3> Projetando o melhor para sua vida </h3>
                            <Link to="/Servicos-Arquitetura"> Veja os serviços! </Link>
                        </div>

                        <div className="sectorServicecomp">
                            <h2> Desenvolvimento e Tecnologia </h2>
                            <h3> O impacto da tecnologia na sua vida </h3>
                            <Link to="/Servicos-Computacao"> Veja os serviços! </Link>
                        </div>

                        <div className="sectorServiceele">
                            <h2> Soluções Elétricas </h2>
                            <h3> Economizando para você e para o planeta </h3>
                            <Link to="/Servicos-Eletrica"> Veja os serviços! </Link>
                        </div>

                        <div className="sectorServiceauto">
                            <h2> Máquinas e Equipamentos </h2>
                            <h3> Facilitando a sua vida </h3>
                            <Link to="/Servicos-Automacao"> Veja os serviços! </Link>
                        </div>

                        <div className="sectorServicenegoc">
                            <h2> Gestão de Negócios </h2>
                            <h3> Facilitando a sua vida </h3>
                            <Link to="/Servicos-Negocios"> Veja os serviços! </Link>
                        </div>

                        <Link to="/Servicos"> Conheça todos os nossos serviços </Link>
                    </div>


                </div>


            </section>

            <section id="whyChooseUs">

                <div className="chooseTextWrapper">

                    <div className="chooseText">

                        <h1>Acelere a realização dos seus sonhos</h1>

                        <p>A Aurea é uma empresa sem fins lucrativos, composta 100% por estudantes graduandos do IFF Centro. Toda renda é reinvestida em conhecimento para nossos membros, através de cursos, equipamentos, infraestrutura e etc. Todos são voluntários e estão aqui para se desenvolver profissionalmente e realizar sonhos. Todos os nossos projetos são supervisionados por professores orientadores, que garantem a qualidade do mesmo! são 6 anos de existência realizando sonhos. E aí, o que podemos alcançar juntos?</p>

                    </div>

                    <div className="chooseImgWrapper">

                        {/*<img draggable="false" src={LuaRoxo} alt="" />*/}

                    </div>

                </div>

            </section>

            <section id="feedbackCards">

                <div className="feedbackCardsWrapper">

                    <div className="feedbackCards">

                        {/*                             <div className="feedbackImgWrapper">

                                <img src={Joelma} alt="imagem de perfil" />

                            </div> */}

                        <h2>Vinícius</h2>

                        <p>"A qualidade de toda pesquisa foi excelente, a entrega de vocês foi tudo dentro daquilo que a gente esperava. Até nos surpreendemos com a entrega final, porque a maioria de vocês não teve contato com esse mercado. Falo por mim e pelos meus sócios."</p>

                    </div>

                    <div className="feedbackCards">

                        {/*                             <div className="feedbackImgWrapper">

                                <img src={Joelma} alt="imagem de perfil" />

                            </div> */}

                        <h2>Marbelly</h2>

                        <p>"Muito obrigada pelo carinho, empatia, pelo atendimento de qualidade e tudo mais. Não as conheço
                            pessoalmente mas o carinho foi de primeira. Vocês são profissionais incríveis e tem um futuro de
                            sucesso pela frente. Espero fazer muitos outros projetos com vocês."</p>

                    </div>

                    <div className="feedbackCards">

                        {/*                             <div className="feedbackImgWrapper">

                                <img src={Joelma} alt="imagem de perfil" />

                            </div> */}

                        <h2>Renata</h2>

                        <p>"Excelente Trabalho, a apresentação e a organização superou minhas expectativas! Parabéns a todos!"</p>

                    </div>

                </div>

            </section>

            <section id="ourPartners">

                <h1> Nossos parceiros </h1>
                <p> São um orgulho nosso, cada um deles tem ou teve um papel importante na caminhada da Aurea até onde está hoje! Nós somos extremamente gratos por ter esses parceiros conosco! </p>

                <div className="partnersCardsWrapper">

                    <div className="partnersCards">

                        <div className="partnersImgWrapper">
                            <a href='http://www.riojunior.com.br/' target='_blank' rel="noreferrer"> <img src={RJ} alt="RioJunior" /> </a>
                        </div>

                        <div className="partnersText">

                            <h2> <a href='http://www.riojunior.com.br/' target="_blank" rel="noreferrer">RioJunior</a> </h2>
                            <p> Federação de Empresas Juniores do estado do Rio de Janeiro. </p>

                        </div>

                    </div>

                    <div className="partnersCards">

                        <div className="partnersImgWrapper">
                            <a href='https://brasiljunior.org.br/' target='_blank' rel="noreferrer">  <img src={BJ} alt="Brasil Júnior" /> </a>

                        </div>

                        <div className="partnersText">

                            <h2> <a href='https://brasiljunior.org.br/' target="_blank" rel="noreferrer">Brasil Júnior</a> </h2>
                            <p> Instância que representa as empresas juniores brasileiras. </p>

                        </div>

                    </div>

                    <div className="partnersCards">

                        <div className="partnersImgWrapper">
                            <a href='https://www.voitto.com.br/' target='_blank' rel="noreferrer"> <img src={VOITTO} alt="Voitto" /> </a>
                        </div>

                        <div className="partnersText">

                            <h2> <a href='https://www.voitto.com.br/' target="_blank" rel="noreferrer">Voitto</a> </h2>
                            <p> A mais completa plataforma de educação, sendo referência em empregabilidade na área da engenharia. </p>

                        </div>

                    </div>

                    <div className="partnersCards">

                        <div className="partnersImgWrapper">
                            <a href='https://ejcm.com.br/' target='_blank' rel="noreferrer"> <img src={EJCM} alt="EJCM" /> </a>
                        </div>

                        <div className="partnersText">

                        <h2> <a href='https://ejcm.com.br/' target="_blank" rel="noreferrer">EJCM</a> </h2>
                        <p> Há mais de 30 anos no mercado, a EJCM é uma Empresa Júnior pioneira no TI. A primeira do continente. </p>

                        </div>

                    </div>

                    <div className="partnersCards">

                        <div className="partnersImgWrapper">
                            <a href='https://embrapii.org.br' target='_blank' rel="noreferrer"> <img src={logoEmbrapii} alt="Instituto Federal Fluminense" /> </a>
                        </div>

                        <div className="partnersText">

                            <h2> <a href='https://embrapii.org.br' target="_blank" rel="noreferrer">Polo de inovação / Embrapii</a>  </h2>
                            <p> Polo de inovação do IFF e a Empresa Brasileira de Pesquisa e Inovação Industrial. </p>

                        </div>

                    </div>

                    <div className="partnersCards">

                        <div className="partnersImgWrapper">
                            <a href='https://www.sicoob.com.br/' target='_blank' rel="noreferrer"> <img src={sicooblogo} alt="RioJunior" /> </a>
                        </div>

                        <div className="partnersText">

                            <h2> <a href='https://www.sicoob.com.br/' target="_blank" rel="noreferrer">Sicoob</a> </h2>
                            <p> Instituição financeira cooperativa com milhões de clientes em todo o Brasil. </p>

                        </div>

                    </div>
                    
                    <div className="partnersCards">

                        <div className="partnersImgWrapper">
                            <a href='https://portal1.iff.edu.br/nossos-campi/campos-centro' target='_blank' rel="noreferrer"> <img src={IFF} alt="Instituto Federal Fluminense" /> </a>
                        </div>

                        <div className="partnersText">

                            <h2> <a href='https://portal1.iff.edu.br/nossos-campi/campos-centro' target="_blank" rel="noreferrer">Instituto Federal Fluminense</a>  </h2>
                            <p> Universidade em que a Aurea está situada, todos os membros da Empresa estudam aqui. </p>

                        </div>

                    </div>
                    
{/*                     <div className="partnersCards">

                        <div className="partnersImgWrapper">
                            <a href='http://www.riojunior.com.br/' target='_blank' rel="noreferrer"> <img src={ApsisLogo} alt="RioJunior" /> </a>
                        </div>

                        <div className="partnersText">

                            <h2> <a href='http://www.riojunior.com.br/' target="_blank" rel="noreferrer">Apsis</a> </h2>
                            <p> Empresa do ramo de consultorias independentes especializada em avaliações e geração de valor para seus clientes. </p>

                        </div>

                    </div>    */}                

                </div>

            </section>

            <WhatsappButton />

            {/*<Poupup />  Sempre remover no final do PS */}

            <Footer />

        </div>

    )
}

export default Home;