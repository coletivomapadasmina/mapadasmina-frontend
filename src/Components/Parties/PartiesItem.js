import React from 'react'

const PartiesItems = (props) => (
  <li className="parties-item">
    <label className="parties-label">{props.party.name}
      <input
        id={props.party.id}
        type="checkbox"
        onChange={props.onChange}
      />
      <span className="checkmark"></span>
    </label>
  </li>
)

export default PartiesItems
