import React from 'react'
import './styles.css'

const BioButton = ({ url, text }) => (
  <a className="bio-button" target="_blank" rel="noopener noreferrer" href={url}>{text}</a>
)

export default BioButton
