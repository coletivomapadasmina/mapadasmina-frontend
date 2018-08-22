import React from 'react'
import CloseButton from '../Close/CloseButton'
import './Profile.css';

export default class Profile extends React.PureComponent {
  render() {
    const { profile, handleClose } = this.props

    if (!profile.picture) return null;

    return (
      <div className="profile-candidate col-md-12">
        <CloseButton handleClose={handleClose} />
        <div className="inner">
          <h3>{profile.electionName}</h3>
          <div className="container profile-photo">
            <img
                className="figure-img rounded-circle"
                alt={profile.electionName}
                src={profile.picture.url} />
          </div>
          <div>
              <p className="profile-party">{profile.party.name} | {profile.number}</p>
              <p className="profile-bio">{profile.bio}</p>
          </div>
        </div>
      </div>
    )
  }
}
