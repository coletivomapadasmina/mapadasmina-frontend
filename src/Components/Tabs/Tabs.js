import React from 'react';
import './Tabs.css';
import CausesWrapper from '../Causes/CausesWrapper'
import Profile from '../Profile/Profile'

function Tabs(props) {
    return (
        <section className="tabs col-md-4">
            <div className="col-md-12 panel">
              <CausesWrapper
                onChange={props.onChange}
                className={props.profile ? 'd-none': ''}
              />
              {props.profile && <Profile profile={props.profile} handleClose={props.handleClose} />}
            </div>
        </section>
    )
}

export default Tabs
