import './index.css'

const TablsList = props => {
  const {CategoryItem, OnCategoryClick, isActive} = props
  const {displayText, tabId} = CategoryItem
  const onItemClick = () => {
    OnCategoryClick(tabId)
  }

  const cssProp = isActive ? 'underline' : ''

  return (
    <li>
      <button
        type="button"
        className={`categoryCss ${cssProp}`}
        onClick={onItemClick}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TablsList
