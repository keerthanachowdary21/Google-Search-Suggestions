// Write your code here

import {Component} from 'react'

import './index.css'

import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  onChangeSuggestions = event => {
    this.setState({searchInput: event.target.value})
  }

  selectinput = suggestion => {
    this.setState({searchInput: suggestion})
  }

  render() {
    const {searchInput} = this.state
    const {suggestionsList} = this.props

    const searchResult = suggestionsList.filter(eachItem =>
      eachItem.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="main-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="logo"
        />
        <div className="search-container">
          <div className="search-bar-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="icon"
            />
            <input
              type="Search"
              placeholder="Search Google"
              value={searchInput}
              className="inputValue"
              onChange={this.onChangeSuggestions}
            />
          </div>
          <ul className="unorder-list">
            {searchResult.map(item => (
              <SuggestionItem
                suggestioninfo={item}
                key={item.id}
                selectinput={this.selectinput}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
