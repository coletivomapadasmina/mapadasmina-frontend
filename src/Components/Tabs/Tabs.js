import React from 'react';
import './Tabs.css';
import CausesWrapper from '../Causes/CausesWrapper'
import PartiesWrapper from '../Parties/PartiesWrapper'
import Profile from '../Profile/Profile'

function Tabs(props) {
  const styles = props.profile ? 'd-none': ''

    return (
        <section className="tabs col-md-4">
            <div className="col-md-12 panel">
              <CausesWrapper
                onChange={props.onChange}
                className={styles}
              />
              <PartiesWrapper
                onChange={props.onChangeParties}
                className={styles}
              />
              {props.profile && <Profile profile={props.profile} handleClose={props.handleClose} />}
            </div>
        </section>
    )
}

export default Tabs
