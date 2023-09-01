// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestionItemList, updatedInput} = props
  const {suggestion} = suggestionItemList

  const updatedSearchResult = () => {
    updatedInput(suggestion)
  }

  return (
    <div>
      <li className="list-container">
        <p className="paragraph">{suggestion}</p>
        <button
          type="button"
          className="btn-icon"
          onClick={updatedSearchResult}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
            alt="Arrow"
            className="arrow-card"
          />
        </button>
      </li>
    </div>
  )
}

export default SuggestionItem
