import React from 'react'
import './styles.css'
import ping from '../../services/ping'
import TextInput from '../TextInput'

export default class extends React.Component {

  state = {
    serverName: '',
    time: '',
    loading: false
  }

  onSubmit = async (event) => {
    event.preventDefault()
    const {serverName} = this.state

    if (!serverName) {
      return
    }

    this.setState({loading: true})

    ping(serverName)
      .then(time => this.setState({time: `${time} ms`, loading: false}))
      .catch(time => this.setState({time, loading: false}))
  }

  onChange = (event) => {
    const {name, value} = event.target
    this.setState({[name]: value.trim()})
  }

  render () {
    const {serverName, time, loading} = this.state

    return (
      <div className={'appPing'}>

        <h1>App Ping</h1>

        <form onSubmit={this.onSubmit} className={'form'}>
          <TextInput
            name={'serverName'}
            value={serverName}
            onChange={this.onChange}
            onBlur={this.onChange}
          />

          <button className={'submit'}>
            {loading ? 'Wait...' : 'Ping'}
          </button>
        </form>

        <div className={'result'}>Time: {time}</div>

      </div>
    )
  }
}
