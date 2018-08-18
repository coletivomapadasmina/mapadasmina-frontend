import React from 'react'
import './styles.css'

const GoToMap = ({ styles }) => (
  <div className="go-to-map">
    <a className="link-to-map" href="#mapa">
      <span>IR PARA O MAPA</span>
      <div className="circle-to-map">
        <i className={styles} aria-hidden="true"></i>
      </div>
    </a>
  </div>
)

export default GoToMap
