import React from 'react'
import './styles.css'

const BioButton = ({ url, text }) => (
  <div className="bio-button">
    <a target="_blank" href={url}>{text}</a>
  </div>
)

export default BioButton
