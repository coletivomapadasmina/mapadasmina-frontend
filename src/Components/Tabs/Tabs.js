import React from 'react';
import './Tabs.css';
import CausesWrapper from '../Causes/CausesWrapper'

function Tabs(props) {
    return (
        <div className="tabs col-md-12">
            <div className="col-md-7"></div>
            <div className="col-md-5 panel">
              <CausesWrapper
                onChange={props.onChange}
              />
            </div>
        </div>
    )
}

export default Tabs
