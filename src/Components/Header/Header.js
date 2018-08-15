import React from 'react';
import './Header.css';

function Header(props) {
    return (
      <section className="header d-flex align-items-center h-100">
          <div className="video-container">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe
                  title="Mapa das Mina"
                  className="embed-responsive-item"
                  src="https://www.youtube.com/embed/A1Ne7iXNtDo"
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen />
            </div>
          </div>
        <div className="go-to-map">
            <a className="link-to-map" href="#mapa">
              <span>IR PARA O MAPA</span>
              <div className="circle-to-map">
                <i className="down" aria-hidden="true"></i>
              </div>
            </a>
        </div>
      </section>
    )
}

export default Header
