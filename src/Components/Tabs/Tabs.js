import React from 'react';
import './Tabs.css';
import CausesWrapper from '../Causes/CausesWrapper'
import Profile from '../Profile/Profile'

function Tabs(props) {
    return (
        <section className="tabs col-md-4">
            <div className="col-md-12 panel">
              {
                props.profile
                ? <Profile profile={props.profile} handleClose={props.handleClose} />
                : <CausesWrapper onChange={props.onChange} />
              }
            </div>
        </section>
    )
}

export default Tabs
