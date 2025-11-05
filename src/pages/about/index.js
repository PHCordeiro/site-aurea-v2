import { React } from 'react';

import Header from '../../components/header'
import Footer from '../../components/footer'

import mascote1 from '../../imgs/Mascote1.png'
import aureaTeam from '../../imgs/AureaTeam.png'

import Linkedin from "../../imgs/linkedinLogo2.svg"

import './style.scss'
import WhatsappButton from '../../components/whatsappButton';

function AboutUs() {

    return (

        <div id='mainAboutUs'>

            <Header />

            <section id='heroSectionAbout'>

                <div className='rowObjects'>
                    <div className='collumnObjects'>
                        <h1>Prazer, Aurea!</h1>
                        <p>Fundada no dia 9 de Agosto de 2016, a Aurea Soluções e Projetos deu os seus primeiros passos como uma Empresa Júnior no Instituto Federal Fluminense como uma empresa multidiciplinar que presta serviços nas áreas de&nbsp;
                            <a href="/Servicos">Engenharia de Computação,</a>
                            <a href="/Servicos">Engenharia Elétrica,</a>
                            <a href="/Servicos">Engenharia de Controle e Automação,</a>
                            <a href="/Servicos">Arquitetura e Urbanismo.</a>
                        </p>
                        <p>No ano de 2018 a Aurea passou pelo processo de federação, que de fato a introduziu ao MEJ (Movimento Empresa Júnior) como uma Empresa Júnior. E com muito esforço e trabalho duro recebemos nos anos de 2019 e 2020 diversas premiações de visibilidade estadual, fazendo com que a Aurea fosse reconhecida como uma empresa "Bi Impacto", ou seja, uma Empresa Júnior capaz de bater todas as suas metas anuais em dois anos consecutivos. Dessa forma, em um cenário de maturidade ainda mais expressivo após um 2022 incrível, atualmente, em 2026, a Aurea está atrás de sua próxima conquista em rede: Alcançar, pela segunda vez em sua história, o Bi Impacto!</p>

                    </div>
                    <div className="heroImgWrapper">
                        <img draggable="false" src={aureaTeam} alt="" />
                    </div>
                </div>

            </section>

            <section id='sectionWhoWeAre'>

                <div className="MVV">

                    <h1>Nosso MVV</h1>

                    <p>O tripé Missão, Visão e Valores, carinhosamente apelidado como MVV, é uma
                        estratégia interna imprescindível para a empresa ter entendimento de si mesma.</p>

                </div>

                <div className="missionValuesEyesight" >

                    <div className="cardM">

                        <h3>Missão</h3>

                        <div className="textBox"  >
                            <p>Nossa missão é <b>formar empreendedores de impacto</b> através do jeito Aureano de ser.</p>
                        </div>

                    </div>

                    <div className="cardV1">
                        <h3>Visão</h3>

                        <div className="textBox"  >
                            <p>Nossa visão até 2025 é <b>ser o Elo</b> entre a região Norte e o Sucesso, formando, através da <b>constância de resultados</b>, os <b>líderes</b> que levarão a Aurea para o <b>Alto Impacto</b>.</p>
                        </div>
                    </div>

                    <div className="cardV2">
                        <h3>Valores</h3>

                        <div className="textBox"  >

                            <div className="tableAurea" >

                                <tr><td><b>A</b>paixonado</td></tr>
                                <tr><td><b>U</b>nido</td></tr>
                                <tr><td><b>R</b>esponsável</td></tr>
                                <tr><td><b>E</b>mpático</td></tr>
                                <tr><td><b>A</b>udacioso</td></tr>
                                <tr><td><b>N</b>otável</td></tr>
                                <tr><td><b>O</b>bstinado</td></tr>

                            </div>

                        </div>
                    </div>

                </div>

            </section>

            <section id="membersTestimonial">

                <h1 id="textIntroTestimonial">Relatos dos nossos pós-juniores</h1>

                <div className="membersCardTestimonialWrapper">

                    <div className="membersCardTestimonial">

                        <div className="membersTestimonialInfos">

                            <div className="imageTestimonialWrapper">

                                <img src="https://i.ibb.co/10S1f5R/Heitor.png" alt="imagem" />

                            </div>

                            <div className="testimonialMemberInfo">

                                <div className="testimonialMembersTextInfos">

                                    <h1>Heitor Vasconcelos</h1>
                                    <h4>Ex Vice-Presidente</h4>

                                </div>

                                <a href="https://www.linkedin.com/in/heitor-vasconcelos-35423b192/" className="testimonialImageWrapper" target="_blank" rel="noreferrer">

                                    <img src={Linkedin} alt="LinkedIn" />

                                </a>

                            </div>

                        </div>

                        <div className="testimonialTextWrapper">

                            <p>"Antes e depois. Pré e pós. Separado por um marco, assim é minha trajetória devido a Aurea. As vezes me pego olhando para novembro de 2018 quando entrei na empresa e o quanto aprendi de lá para cá é imensurável. O Heitor que entra no MEJ acreditava que sabia o que era liderança, problemas, responsabilidade, aprendizado... Todas essas palavras foram ressignificadas durante esse pouco mais de 1 ano e meio. A alegria do primeiro projeto da área de engenharia elétrica, os desafios a cada nova negociação, cada meta batida, cada recorde que em sequência, quase como um furacão, íamos rompendo um por um para escrever conquistas ainda maiores na história da Aurea. Existem diversos pontos de inflexão na minha jornada, desde momento em família como o EFEJ 19, até momentos em que errei enquanto liderança e aprendi que grande parte de ser líder é servir... Olhar para todas as experiências no MEJ é olhar para aprendizados em boas conversas, algo que aprendi a amar tanto quanto o futebol do final de semana. Tenho o que acredito ser mais quase 6 meses de trajetória por aqui e espero que cada momento seja como essa foto, com responsabilidade e leveza, o sorriso que tanto aprendi a manter durante o percurso para que sempre traga alegria na chegada e deixe saudade na partida."</p>

                        </div>

                    </div>

                    <div className="membersCardTestimonial">

                        <div className="membersTestimonialInfos">

                            <div className="imageTestimonialWrapper">

                                <img src="https://i.ibb.co/rsg5HvG/Captura-de-tela-2021-06-22-195444.png" alt="imagem" />

                            </div>

                            <div className="testimonialMemberInfo">

                                <div className="testimonialMembersTextInfos">

                                    <h1>Maria Clara</h1>
                                    <h4>Ex-Diretora de Marketing</h4>

                                </div>

                                <a href="https://www.linkedin.com/in/maria-clara-moura-5a30a9164/" className="testimonialImageWrapper" target="_blank" rel="noreferrer">

                                    <img src={Linkedin} alt="LinkedIn" />

                                </a>

                            </div>

                        </div>

                        <div className="testimonialTextWrapper">

                            <p>"Quando encontrei a Aurea no início da faculdade ela ainda passava por seu processo de configuração e federação, enquanto eu estava buscando por experiências além das salas de aula. Hoje, 2 anos depois, afirmo que é nítido o crescimento que a empresa vem tendo, e o quanto acrescenta aos voluntários que passam por ali. Na Aurea desenvolvi habilidades que dificilmente conseguiria em outro lugar, e o que mais me encantou foi enxergar a empresa como um espaço multidisciplinar de trocas potentes, onde estudantes de diferentes cursos e perfis se juntam por um propósito, buscando aprimoramento de processos, soluções de desafios na prática e aprendizagem conjunta. Nas experiências de liderança e gerenciamento, pude reconhecer meus pontos fortes a serem valorizados e os fracos que merecem maior cuidado, o que direciona meu desenvolvimento em prol de ser uma melhor profissional ao oferecer soluções mais completas. Conheci metodologias ágeis que aprimoram processos, profissionais referência, e vivi de perto o gerenciamento de uma empresa antes mesmo de abrir um escritório. Toda minha gratidão aos amigos que fiz nesse caminho, que tanto me ensinaram e provaram o quanto podemos ir longe quando se tem uma equipe alinhada, que escuta, sonha e acredita junto."</p>

                        </div>

                    </div>

                    <div className="membersCardTestimonial">

                        <div className="membersTestimonialInfos">

                            <div className="imageTestimonialWrapper">

                                <img src="https://i.ibb.co/BgzcL7s/Victor.png" alt="imagem" />

                            </div>

                            <div className="testimonialMemberInfo">

                                <div className="testimonialMembersTextInfos">

                                    <h1>Victor Eyer</h1>
                                    <h4>Ex-Assessor de Projetos</h4>

                                </div>

                                <a href="https://www.linkedin.com/in/victoreyer/" className="testimonialImageWrapper" target="_blank" rel="noreferrer">

                                    <img src={Linkedin} alt="LinkedIn" />

                                </a>

                            </div>

                        </div>

                        <div className="testimonialTextWrapper">

                            <p>"É bem claro conseguir diferenciar o Victor antes e depois do MEJ/Aurea. O Victor de antes, era tão focado na parte técnica que acaba esquecendo algumas habilidades requisitadas no mercado. O MEJ me ajudou muito nesse quesito! Aprendi muito sobre soft skill's, essas "habilidades extras" que não aprendemos durante a faculdade, mas que fazem uma diferença absurda para o mercado. Em apenas 6 meses de MEJ consigo ver claramente minha evolução. Logo que entrei escolhi, na Aurea, a Diretoria de Projetos como primeira opção e, para minha surpresa, me tornei Gerente de Projetos de computação. A experiência foi (e é) incrível! Lidar com clientes de outras empresas/serviços/negócios é algo espetacular! Tirei de lição um pouquinho do que aprendi com cada um deles! Aprendi a realizar o contado da melhor forma, saber conversar bem sobre projetos, liderar equipes, cobrar e também ser cobrado, da maneira correta! Usei tudo isso de motivação para promover um projeto maior pessoal, a EYER TECH. Todo o aprendizado que consegui no MEJ está sendo muito bem utilizado nessa nova trajetória da minha vida. Aprendi com a Aurea como é bom realizar um sonho de um cliente e, mais que isso, que o sonho de um cliente também se torna o meu sonho!"</p>

                        </div>

                    </div>

                    <div className="membersCardTestimonial">

                        <div className="membersTestimonialInfos">

                            <div className="imageTestimonialWrapper">

                                <img src="https://i.ibb.co/TbNNdWZ/Barbara-2.jpg" alt="imagem" />

                            </div>

                            <div className="testimonialMemberInfo">

                                <div className="testimonialMembersTextInfos">

                                    <h1>Bárbara</h1>
                                    <h4>Ex-Assessora de Comercial</h4>

                                </div>

                                <a href="https://www.linkedin.com" className="testimonialImageWrapper" target="_blank" rel="noreferrer">

                                    <img src={Linkedin} alt="LinkedIn" />

                                </a>

                            </div>

                        </div>

                        <div className="testimonialTextWrapper">

                            <p>"Meu nome é Bárbara, trabalhei na Diretoria Comercial por aproximadamente 1 ano. Durante o tempo em que participei da Aurea, me deparei com experiências de trabalho totalmente novas, com pessoas incríveis e com oportunidades de aprender de diversas maneiras, isso me agregou de inúmeras formas. A empresa tem um futuro incrível pela frente, evoluindo cada vez mais, por que acredita e apoia cada um dos seus membros, e todos eles acreditam nela. Hoje me encontro no oitavo período de Arquitetura e Urbanismo e faço estágio em um escritório. São realidades bem diferentes e fico muito grata por ter feito parte de cada uma delas!"</p>

                        </div>

                    </div>

                    <div className="membersCardTestimonial">

                        <div className="membersTestimonialInfos">

                            <div className="imageTestimonialWrapper">

                                <img src="https://i.ibb.co/wr9g7DT/IMG-2446-2.jpg" alt="imagem" />

                            </div>

                            <div className="testimonialMemberInfo">

                                <div className="testimonialMembersTextInfos">

                                    <h1>Ana Carolina</h1>
                                    <h4>Ex-Assessora de Comercial/Marketing</h4>

                                </div>

                                <a href="https://www.linkedin.com/in/ana-carolina-paes-b34344190/" className="testimonialImageWrapper" target="_blank" rel="noreferrer">

                                    <img src={Linkedin} alt="LinkedIn" />

                                </a>

                            </div>

                        </div>

                        <div className="testimonialTextWrapper">

                            <p>"É imensurável o que eu vivo desde que entrei na Aurea. Eu nunca fui uma aluna exemplar na faculdade e isso me trazia muitas inseguranças! Sempre repeti que queria entrar numa empresa, obedecer ordens e ficar lá pra sempre, com o máximo de estabilidade possível... risos. Mal sabia eu como isso mudaria em 180°! Empreendedorismo sempre me trouxe medo, porque era o contrário do que eu achei que merecia e alcançaria. Até que uma amiga minha entrou em uma empresa júnior em outra faculdade e despertou minha curiosidade. Algum tempo depois, a Aurea foi fundada e eu fiz o primeiro processo seletivo. Não passei! E ainda bem! O momento que eu entrei foi o momento certo pro crescimento que eu precisava. Além de encarar a diretoria do Comercial na Aurea, me aventurei em outro cargo no MEJ, no Núcleo de Empresas Juniores do Norte Fluminense. No começo da pandemia, logo depois de sentarmos e pararmos os processos internos a fim de adaptá-los, fui convidada pela Evolution e pela Inova Consultoria para falar sobre Vendas e Spin Selling e foram 2 momentos muito marcantes, onde eu pude devolver para a rede um pouco de tudo que ela me ensinou e me ensina, seja no dia a dia ou nos imersivos e intensos eventos MEJ!"</p>

                        </div>

                    </div>

                    <div className="membersCardTestimonial">

                        <div className="membersTestimonialInfos">

                            <div className="imageTestimonialWrapper">

                                <img src="https://i.ibb.co/nLzW1VY/Full-Size-Render-2.jpg" alt="imagem" />

                            </div>

                            <div className="testimonialMemberInfo">

                                <div className="testimonialMembersTextInfos">

                                    <h1>Paula Jordy</h1>
                                    <h4>Ex-Vice Presidente</h4>

                                </div>

                                <a href="https://www.linkedin.com/in/paula-jordy-a94964a0/" className="testimonialImageWrapper" target="_blank" rel="noreferrer">

                                    <img src={Linkedin} alt="LinkedIn" />

                                </a>

                            </div>

                        </div>

                        <div className="testimonialTextWrapper">

                            <p>"Meu nome é Paula Jordy e tive o prazer de participar do início do sonho Aurea. Entramos nessa jornada com sede de aprender e desbravar. O movimento MEJ te faz pertencer e isso que alavancou nossa motivação. Como já muito bem colocado pelo Paulo Freire: “Ensinar não é transferir conhecimento, mas criar as possibilidades para a sua própria produção ou a sua construção”. Olhar a Aurea agora e ver a continuidade e os frutos desse trabalho desperta um imenso orgulho! Hoje trabalho na iniciativa privada e levo essências fundamentais de trabalho em equipe e “ser dono” que vem muito das experiências adquiridas na Aurea. Se você que está lendo esse post entender que pode contribuir e evoluir junto, venha para o movimento!"</p>

                        </div>

                    </div>
                    
                    <div className="membersCardTestimonial">

                        <div className="membersTestimonialInfos">

                            <div className="imageTestimonialWrapper">

                                <img src="https://i.ibb.co/FgghMkt/Jo-o-Victor.png" alt="imagem" />

                            </div>

                            <div className="testimonialMemberInfo">

                                <div className="testimonialMembersTextInfos">

                                    <h1>João Victor</h1>
                                    <h4>Ex-Assessor de Gestão de Pessoas</h4>

                                </div>

                                <a href="https://www.linkedin.com/in/joão-victor-fernandes-maciel-da-silva-9a5a5b1a6/" className="testimonialImageWrapper" target="_blank" rel="noreferrer">

                                    <img src={Linkedin} alt="LinkedIn" />

                                </a>

                            </div>

                        </div>

                        <div className="testimonialTextWrapper">

                            <p>"Um dia enquanto estava entrando IFF fui parado por Heitor que comentou que o IFF tinha uma empresa Júnior chamada Aurea, não tinha menor ideia do que se tratava, mas ele deu uma resumida e pesquisei mais a fundo sobre a Aurea. No primeiro momento gostei porque poderia ser algo além da faculdade, e que seria algo bom para meu currículo. Sempre fui uma pessoa tímida, que tinha dificuldades de falar em público, fiz as etapas do processo seletivo e chegou a vez da entrevista, a primeira entrevista da minha vida, mas superou minhas expectativas, Marcos me trouxe uma calma que consegui falar sem me embolar tanto. Não estava muito esperançoso, mas chegou o email dizendo que passei e assim fui seguindo. Com o passar do tempo conhecendo o MEJ e a Aurea pude ver que aquilo não era apenas algo animador e agregador para o currículo, era algo muito além, que impactava na vida em vários sentidos, quando se abraça o movimento você entra num mundo novo, a Aurea se tornou uma família, sou uma pessoa diferente da que entrou, mudei no âmbito pessoal e profissional, evolui e continuo evoluindo em muitos sentidos, me tornei parte de algo grande e que nem imaginava existir. Só tenho coisas boas para dizer sobre isso tudo. Eu não seria eu se não estivesse na Aurea."</p>

                        </div>

                    </div>

                </div>

            </section>

            <WhatsappButton />

            <Footer />

        </div>

    )

}

export default AboutUs