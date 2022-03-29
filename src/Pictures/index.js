import './index.css'

const Pictures = props => {
  const {thumbnailDetails, onThumbnailClick} = props
  const {id, thumbnailUrl} = thumbnailDetails

  const onClickingThumbnail = () => {
    onThumbnailClick(id)
  }
  return (
    <li>
      <button
        type="button"
        className="ThumbnailButton"
        onClick={onClickingThumbnail}
      >
        <img className="thumbnailImage" alt="thumbnail" src={thumbnailUrl} />
      </button>
    </li>
  )
}
export default Pictures
