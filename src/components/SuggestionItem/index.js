// Write your code here

import './index.css'

const SuggestionItem = props => {
  const {suggestioninfo, selectinput} = props
  const {suggestion} = suggestioninfo

  const onselectInput = () => {
    selectinput(suggestion)
  }
  return (
    <li className="list-conatiner" onClick={onselectInput}>
      <p className="para">{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png "
        alt="arrow"
        className="arrow-icon"
      />
    </li>
  )
}

export default SuggestionItem
