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
        <div>
          <h4>Contatos</h4>
          <p><a href="mailto:coletivomapadasmina@gmail.com">coletivomapadasmina@gmail.com</a></p>
        </div>

        <div>
          <SocialNetworks
            color="white"
            facebook="https://www.facebook.com/mapadasmina2018"
            instagram="https://www.instagram.com/mapadasmina/"
          />
        </div>

        <div>
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
      <div className="copyright">
        <p>© 2018 #mapadasmina. Todos os direitos reservados.</p>
      </div>
    </div>
  </section>
)

export default Contribute
