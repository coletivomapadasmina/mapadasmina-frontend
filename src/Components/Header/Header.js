import React from 'react';
import GoToMap from '../GoToMap'
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
          <GoToMap styles="down" />
      </section>
    )
}

export default Header
