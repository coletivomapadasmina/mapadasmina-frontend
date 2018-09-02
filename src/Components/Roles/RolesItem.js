import React from 'react'

const RolesItems = (props) => {
  let styles = {
    width: '20px',
    height: '10px',
    marginLeft: '10px',
    display: 'inline-block',
    backgroundColor: `#${props.color}`,
  }

  return (
    <li className="roles-item">
      <label className="roles-label">{props.name}
        <div style={styles}></div>
        <input
          value={props.id}
          type="checkbox"
          checked={props.checked === parseInt(props.id, 10)}
          onChange={props.onChange}
        />
        <span className="checkmark"></span>
      </label>
    </li>
  )
}

export default RolesItems
