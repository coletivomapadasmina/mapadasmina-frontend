import React from 'react'

const CausesItems = (props) => (
  <li>
    <label>
      <input type="checkbox" />
      {props.cause.title}
    </label>
  </li>
)

export default CausesItems
