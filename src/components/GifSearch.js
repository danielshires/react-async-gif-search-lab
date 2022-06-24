import React, { Component } from 'react'

export default class GifSearch extends Component {

    constructor(){
        super()
        this.state = {
            searchInput: '',
        }
    }

    handleChange= event => {
        this.setState({
            [event.target.name]: event.target.value
        })
        
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.submitHandler(this.state.searchInput)
    }

  render() {
    return (
      <div>
         <form onSubmit={event => this.handleSubmit(event)}>
        <div>
          <label>
            Search
            <input onChange={this.handleChange} id="searchInput" name="searchInput" type="text" />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
      </div>
    )
  }
}
