import React from 'react'
import './styles.css'

const SocialNetworks = (props) => {
  const { facebook, instagram, showTitle, color } = props

  const fbIcon = `bg-facebook_icon_${color}`
  const instaIcon = `bg-instagram_icon_${color}`

  return (
    <div className="social-networks">
      {showTitle && <h5 className="title">Redes Sociais</h5>}
      {facebook && (
        <a target="_blank" rel="noopener noreferrer" href={facebook}>
          <i className={fbIcon}></i>
        </a>
      )}
      {instagram && (
        <a target="_blank" rel="noopener noreferrer" href={instagram}>
          <i className={instaIcon}></i>
        </a>
      )}
    </div>
  )
}

export default SocialNetworks
