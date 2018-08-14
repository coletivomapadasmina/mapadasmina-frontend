import React from 'react';
import './Header.css';

function Header(props) {
    return (
      <section className="header d-flex align-items-center h-100">
          <div className="container">
              <div className="row">
                  <div className="col-md-7 embed-responsive  embed-responsive-16by9">
                      <iframe
                        title="Mapa das Mina"
                        className="embed-responsive-item"
                        src="https://www.youtube.com/embed/A1Ne7iXNtDo"
                        frameBorder="0"
                        allow="autoplay; encrypted-media"
                        allowFullScreen />
                  </div>
                  <div className="col-md-5 text">
                      <p>Texto de apresentação #mapas da mina</p>
                      <a href="#"><button className="btn btn-mais">Saiba Mais</button></a>
                  </div>
              </div>
          </div>
      </section>
    )
}

export default Header
