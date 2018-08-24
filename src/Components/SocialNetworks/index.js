import React from 'react'
import './styles.css'

const SocialNetworks = ({ facebook, instagram }) => (
  <div className="social-networks">
    <h5 className="title">Redes Sociais</h5>
    {facebook && <a target="_blank" href={facebook}><i className="facebook-icon"></i></a>}
    {instagram && <a target="_blank" href={instagram}><i className="instagram-icon"></i></a>}
  </div>
)

export default SocialNetworks
