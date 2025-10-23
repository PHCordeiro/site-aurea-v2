import React, { useEffect, useState } from 'react'
import emailjs from "emailjs-com"

// Componentes
import Header from '../../components/header'
import Footer from '../../components/footer'
import WhatsappButton from "../../components/whatsappButton"

// Assets
import logoAurea from '../../imgs/logoAurea2.png'

// Estilos
import './style.scss'

const WhoWeAre = () => {
  // Estados
  const [ufs, setUfs] = useState([])              // lista de estados
  const [selectedUf, setSelectedUf] = useState('')// estado selecionado
  const [cities, setCities] = useState([])        // lista de cidades
  const [selectedCity, setSelectedCity] = useState('') // cidade selecionada

  // Buscar estados no IBGE
  const getLocales = () => {
    fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome')
      .then(res => res.json())
      .then(json => {
        const names = json.map(uf => uf.sigla)
        setUfs(names)
      })
      .catch(err => console.error("Erro ao buscar estados:", err))
  }

  // Buscar cidades quando mudar o estado selecionado
  const getCities = () => {
    if (!selectedUf) return
    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`)
      .then(res => res.json())
      .then(json => {
        const names = json.map(city => city.nome)
        setCities(names)
      })
      .catch(err => console.error("Erro ao buscar cidades:", err))
  }

  // Captura mudança do select UF
  const handleSelectedUf = (event) => {
    setSelectedUf(event.target.value)
    setSelectedCity('') // resetar cidade quando trocar estado
  }

  // Captura mudança do select City
  const handleSelectedCity = (event) => {
    setSelectedCity(event.target.value)
  }

  // Envio de e-mail com EmailJS
  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm(
      'service_s15jld6',     // ID do serviço
      'template_no2gydo',    // ID do template
      e.target,
      'user_uRxvWrLzQd7xUEe5YKt22' // seu User ID
    )
      .then((result) => {
        alert("E-mail enviado com sucesso!"); // substitua por um feedback visual
    // Exemplo de feedback mais estético (se você tiver um elemento com ID 'success-message')
    // document.getElementById('success-message').style.display = 'block';
    e.target.reset();
      }, (error) => {
        console.error(error.text)
        alert("Erro! Entre em contato por outro meio e nos avise desse erro!")
      })

    e.target.reset()
  }

  // Effects
  useEffect(() => { getLocales() }, [])
  useEffect(() => { getCities() }, [selectedUf])
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div id="App">
      <Header />

      <section id='contactMain'>
        <div className="logo-2">
          <img src={logoAurea} alt="Logo Aurea" />
        </div>

        <h2>ENTRE EM CONTATO CONOSCO!</h2>
        <p>Preencha os campos abaixo e clique em "Enviar Mensagem". </p>

        <form className="contact-form" onSubmit={sendEmail}>
          <input type="text" className="textBox" name="user_name" placeholder="Nome*" required />
          <input type="email" className="textBox" name="user_email" placeholder="Seu E-mail*" required />
          <input type="text" className="textBox" name="user_number" placeholder="Telefone*" required />

          <div className="leftAlign">
            <select name="uf" id="uf" onChange={handleSelectedUf} value={selectedUf} required>
              <option value="">Selecione um estado*</option>
              {ufs.map(uf => (
                <option key={uf} value={uf}>{uf}</option>
              ))}
            </select>

            <select name="city" id="city" onChange={handleSelectedCity} value={selectedCity} required>
              <option value="">Selecione uma cidade*</option>
              {cities.map(city => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>
          </div>

          <textarea className="messageBox" name="message" cols="30" rows="8" placeholder="Sua mensagem*" required />

          <div className="buttonsFormRegister">
            <input type="submit" className="submitBox" value="Enviar Mensagem" />
          </div>
        </form>

        <WhatsappButton />
      </section>

      <Footer />
    </div>
  )
}

export default WhoWeAre
