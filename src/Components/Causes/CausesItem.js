import React from 'react'

const CausesItems = (props) => (
  <li className="causes-item">
    <label>
      <input
        id={props.cause.id}
        type="checkbox"
        onChange={props.onChange}
      />
      {props.cause.title}
    </label>
  </li>
)

export default CausesItems
