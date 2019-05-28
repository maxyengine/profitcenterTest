import React from 'react'
import TextInput from '../TextInput'
import './styles.css'
import { calculateStat } from '../../services/api'

export default class extends React.Component {

  state = {
    inputs: {
      min: '',
      max: '',
      count: ''
    },
    result: {},
    loading: false
  }

  onSubmit = async (event) => {
    event.preventDefault()
    let {min, max, count} = this.state.inputs

    if ([min, max, count].includes('')) {
      alert('Please fill in all the fields')
      return
    }

    min = parseFloat(min)
    max = parseFloat(max)
    count = parseInt(count)

    if (min > max) {
      alert('Max must be greater or equal to Min')
      return
    }

    if (!count) {
      alert('Count must be greater than 0')
      return
    }

    this.setState({loading: true})

    const result = await calculateStat(min, max, count)

    this.setState({result, loading: false})
  }

  isValid = (name, value) => {
    switch (name) {
      case 'min':
      case 'max':
        return /^[+-]?(\d+)?(\.)?(\d+)?$/.test(value)
      case 'count':
        return /^[0-9\b]+$/.test(value)
      default:
        return true
    }
  }

  onChange = (event) => {
    const {name, value} = event.target

    if (value === '' || this.isValid(name, value)) {
      this.setState({
        inputs: {...this.state.inputs, [name]: value}
      })
    }
  }

  render () {
    const {min, max, count} = this.state.inputs
    const {average, standardDeviation, mode, median} = this.state.result
    const loading =  this.state.loading

    return (
      <div className={'appStat'}>

        <h1>App Statistic</h1>

        <form onSubmit={this.onSubmit}>

          <TextInput
            label={'Min'}
            name={'min'}
            value={min}
            onChange={this.onChange}
            onBlur={this.onChange}
          />

          <TextInput
            label={'Max'}
            name={'max'}
            value={max}
            onChange={this.onChange}
            onBlur={this.onChange}
          />

          <TextInput
            label={'Count'}
            name={'count'}
            value={count}
            onChange={this.onChange}
            onBlur={this.onChange}
          />

          <button className={'submit'}>
            {loading ? 'Wait...' : 'Get Result'}
          </button>

        </form>

        <table className={'result'}>
          <thead>
          <tr>
            <th colSpan={2}>Result</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>Average</td>
            <td>{average}</td>
          </tr>
          <tr>
            <td>Standard Deviation</td>
            <td>{standardDeviation}</td>
          </tr>
          <tr>
            <td>Mode</td>
            <td>{mode}</td>
          </tr>
          <tr>
            <td>Median</td>
            <td>{median}</td>
          </tr>
          </tbody>
        </table>

      </div>
    )
  }
}
