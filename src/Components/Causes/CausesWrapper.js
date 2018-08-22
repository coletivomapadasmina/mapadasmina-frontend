import React from 'react'
import CausesItem from './CausesItem'
import './Causes.css';

export default class CausesWrapper extends React.PureComponent {
  state = {
    causes: []
  }

  componentDidMount() {
    fetch('https://mapadasmina-api.herokuapp.com/causes.json')
      .then(res => res.json())
      .then(data => this.setState({ causes: data }))
      .catch(err => console.log('err: ', console.log('error: ', err)))
  }

  render() {
    const { causes } = this.state
    const style = `causes-wrapper col-md-12 ${this.props.className}`

    return (
      <div className={style}>
        <h4 className="causes-title">Pautas</h4>
        <ul className="causes-list">
        {causes && causes.map(c => {
          return (
            <CausesItem
              key={c.id}
              cause={c}
              onChange={this.props.onChange}
            />
          )
        })}
        </ul>
      </div>
    )
  }
}
