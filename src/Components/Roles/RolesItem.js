import React from 'react'

const RolesItems = ({ id, color, name, onChange, checkedRoles }) => {
  let styles = {
    width: '20px',
    height: '10px',
    marginLeft: '10px',
    display: 'inline-block',
    backgroundColor: `#${color}`,
  }

  // const isChecked = checkedRoles.indexOf(parseInt(id, 10)) !== -1

  // return (
  //   <li className="roles-item">
  //     <label className="roles-label">{name}
  //       <div style={styles}></div>
  //       <input
  //         value={id}
  //         type="checkbox"
  //         checked={isChecked}
  //         onChange={onChange}
  //       />
  //       <span className="checkmark"></span>
  //     </label>
  //   </li>
  // )

    return (
    <li className="roles-item">
      <label className="roles-label">{name}
        <div style={styles}></div>
      </label>
    </li>
  )
}

export default RolesItems
