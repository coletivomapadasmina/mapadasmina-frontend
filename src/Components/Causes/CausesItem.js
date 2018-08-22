import React from 'react'

const CausesItems = (props) => (
  <li className="causes-item">
    <label className="causes-label">{props.cause.title}
      <input
        id={props.cause.id}
        type="checkbox"
        onChange={props.onChange}
      />
      <span className="checkmark"></span>
    </label>
  </li>
)

export default CausesItems
