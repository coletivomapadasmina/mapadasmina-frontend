import React, { Component } from 'react'
import RolesItem from './RolesItem'
import './Roles.css'

import { roles } from '../../utils'

export default class RolesWrapper extends Component {
  getItems = (checkedRoles) => {
    const items = []

    for (let id in roles) {
      items.push(
        <RolesItem
          key={id}
          id={id}
          checkedRoles={checkedRoles}
          name={roles[id].name}
          color={roles[id].primaryColor}
          onChange={this.props.onChange}
        />
      )
    }

    return items
  }

  render() {
    const style = `roles-wrapper col-md-12 ${this.props.className}`

    return (
      <div className={style}>
        <h4 className="roles-title">Legenda</h4>
        <ul className="roles-list">
        {this.getItems(this.props.checkedRoles)}
        </ul>
      </div>
    )
  }
}
