import React, { Component } from 'react'
import Dropdown from './Dropdown.js'

const options = [
  'Watching This Show.', 'Want to Watch This Show.', 'Finished This Show.'
]

class MarkShow extends Component {
  constructor (props) {
    super(props)
    this.state = {
      selected: ''
    }
    this._onSelect = this._onSelect.bind(this)
  }

  _onSelect (option) {
    console.log('You selected ', option.label)
    this.setState({selected: option})
  }

  render () {
    const defaultOption = this.state.selected
    const placeHolderValue = typeof this.state.selected === 'string' ? this.state.selected : this.state.selected.label

    return (
      <section>
        <Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder="Mark This Show" />
        <div className='result'>
          You:
          <strong> {placeHolderValue} </strong>
        </div>
      </section>
    )
  }
}
export default MarkShow
