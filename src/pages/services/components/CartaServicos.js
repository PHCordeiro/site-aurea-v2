import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "../style.scss";

const servicos = [
  {
    titulo: "Arquitetura",
    itens: [
      "Projeto de arquitetura",
      "Projeto de interiores",
      "Projeto luminotécnico",
      "Projeto de legalização",
      "Projeto de reforma",
      "Projeto de fachada",
      "Consultoria",
      "Projeto de mobiliários",
    ],
    link: "/Servicos-Arquitetura",
  },
  {
    titulo: "Engenharia Elétrica",
    itens: [
      "Análise tarifária",
      "Eficiência energética",
      "Projeto elétrico",
      "Dimensionamento de painéis solares",
      "Projeto luminotécnico",
      "Consultoria em elétrica",
    ],
    link: "/Servicos-Eletrica",
  },
  {
    titulo: "Engenharia de Computação",
    itens: [
      "Website",
      "E-commerce",
      "Consultoria em computação",
    ],
    link: "/Servicos-Computacao",
  },
  {
    titulo: "Engenharia de Automação",
    itens: [
      "Automação de ambientes",
      "Automação empresarial",
      "Controle de acesso (portaria eletrônica, etc.)",
    ],
    link: "/Servicos-Automacao",
  },
  {
    titulo: "Engenharia Mecânica",
    itens: [
      "Análise e otimização de processos mecanizados",
      "Projeto de impressão 3D",
    ],
    link: "/Servicos-Mecanica",
  },
];

const CartaServicos = () => {
  return (
    <>
      <section id="cards-servicos">
     
        <div className="grid-servicos">
          {servicos.map((area, index) => (
            <div key={index} className="card-servico">
              <h3>{area.titulo}</h3>
              <ul>
                {area.itens.map((item, i) => (
                  <Link to={area.link} key={i}><li key={i}>{item}</li></Link>
                  
                ))}
              </ul>

              <div className="card-btn">
                <Link to={area.link} className="btn">Ver Trabalhos</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contato-servicos">
        <div className="conteudo">
          <h2>Quer fechar um projeto?</h2>
          <p>Marque uma reunião de diagnóstico gratuita conosco!</p>
          <Link to="/contato" className="botao-contato">Entrar em Contato</Link>
        </div>
      </section>
    </>
    
  );
};

export default CartaServicos;
