import './index.css'

const Pictures = props => {
  const {thumbnailDetails, onThumbnailClick} = props
  const {id, thumbnailUrl} = thumbnailDetails

  const onClickingThumbnail = () => {
    onThumbnailClick(id)
  }
  return (
    <button
      type="button"
      className="ThumbnailButton"
      onClick={onClickingThumbnail}
    >
      <img className="thumbnailImage" alt="thumbnail" src={thumbnailUrl} />
    </button>
  )
}
export default Pictures
