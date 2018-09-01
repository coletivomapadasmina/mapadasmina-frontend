import React from 'react'
import './styles.css'

const SocialNetworks = (props) => {
  const { facebook, instagram, showTitle } = props

  const fbIcon = showTitle ? 'facebook-icon' : 'about-facebook-icon'
  const instaIcon = showTitle ? 'instagram-icon' : 'about-instagram-icon'

  return (
    <div className="social-networks">
      {showTitle && <h5 className="title">Redes Sociais</h5>}
      {facebook && (
        <a target="_blank" href={facebook}>
          <i className={fbIcon}></i>
        </a>
      )}
      {instagram && (
        <a target="_blank" href={instagram}>
          <i className={instaIcon}></i>
        </a>
      )}
    </div>
  )
}

export default SocialNetworks
