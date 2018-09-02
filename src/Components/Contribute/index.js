import React from 'react'
import './styles.css'
import SocialNetworks from '../SocialNetworks'

const Contribute = () => (
  <section id="contribute">
    <div className="content">

      <div className="top w-100">
        <h3>Cola com a gente que juntas somos maioria</h3>
        <p>#2018voteemmulheres #mapadasmina</p>
      </div>

      <div className="bottom w-100">
        <div className="w-40 d-inline-block mr-5">
          <h4>Contatos</h4>
          <p>coletivomapadasmina@gmail.com</p>
        </div>

        <div className="w-20 d-inline-block">
          <SocialNetworks
            color="white"
            facebook="https://www.facebook.com/mapadasmina2018"
            instagram="https://www.instagram.com/mapadasmina/"
          />
        </div>

        <div className="w-40 d-inline-block">
          <ul className="links">
            <li>
              <a href="mailto:coletivomapadasmina@gmail.com">Sugestões</a>
            </li>
            <li>
              <a href="mailto:coletivomapadasmina@gmail.com">Comunicar erro</a>
            </li>
            <li>
              <a href="mailto:coletivomapadasmina@gmail.com">Parcerias</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
)

export default Contribute
