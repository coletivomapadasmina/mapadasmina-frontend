import React from 'react'
import './Profile.css';

export default class Profile extends React.PureComponent {
  state = {
    profile: {}
  }

  componentDidMount() {
    fetch('/profile.json')
      .then(res => res.json())
      .then(data => this.setState({ profile: data }))
      .catch(err => console.log('err: ', console.log('error: ', err)))
  }

  render() {
    const { profile } = this.state

    if (!profile.picture) return null;

    return (
      <div className="profile-candidate col-md-12">
        <div className="inner">
          <h3>{profile.electionName}</h3>
          <div className="container profile-photo">
            <img
                className="figure-img rounded-circle"
                alt={profile.electionName}
                src={profile.picture.url} />
          </div>
          <div>
              <span>{profile.party.name} | {profile.number}</span><br />
              <p>{profile.bio}</p>
          </div>
        </div>
      </div>
    )
  }
}