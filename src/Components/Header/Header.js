import React from 'react';
import VideoMapa from '../../assets/movies/mapa.mov';
import './Header.css';

function Header(props) {
    return (
      <section className="header">
          <div className="container">
              <div className="row">
                  <div className="col-md-7">
                    <div className="embed-responsive embed-responsive-16by9">
                      <video src={VideoMapa} preload controls />
                    </div>
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
