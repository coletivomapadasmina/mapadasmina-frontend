import React from 'react'
import PartiesItem from './PartiesItem'
import './Parties.css'

export default class PartiesWrapper extends React.PureComponent {
  state = {
    parties: []
  }

  componentDidMount() {
    fetch('https://mapadasmina-api.herokuapp.com/parties.json')
      .then(res => res.json())
      .then(data => this.setState({ parties: data }))
      .catch(err => console.log('err: ', console.log('error: ', err)))
  }

  render() {
    const { parties } = this.state
    const style = `parties-wrapper col-md-12 ${this.props.className}`

    return (
      <div className={style}>
        <h4 className="parties-title">Partidos</h4>
        <ul className="parties-list">
        {parties && parties.map(c => {
          return (
            <PartiesItem
              key={c.id}
              party={c}
              onChange={this.props.onChange}
            />
          )
        })}
        </ul>
      </div>
    )
  }
}
