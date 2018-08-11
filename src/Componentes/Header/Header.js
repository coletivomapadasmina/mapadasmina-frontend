import React from 'react';
import './Header.css';

function Header(props) {
    return (
      <div className="container header">
        <div className="row">
            <div className="col-md-7">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/t7lM7Bn16Zg" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            </div>
            <div className="col-md-5 text">
              <p>Texto de apresentação #mapas da mina</p>
              <a href="#"><button className="btn btn-mais">Saiba Mais</button></a>
            </div>
        </div>
      </div>
    )
}

export default Header
