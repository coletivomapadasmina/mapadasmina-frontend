import React from 'react';
import './Tabs.css';
import CausesWrapper from '../Causes/CausesWrapper'
import Profile from '../Profile/Profile'

function Tabs(props) {
    return (
        <div className="tabs">
            <div className="col-md-12 panel">
              <CausesWrapper />
              <Profile />
            </div>
        </div>
    )
}

export default Tabs
