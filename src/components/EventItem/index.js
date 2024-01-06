import './index.css'

const EventItem = props => {
  const {eventDetails, updateEventStatusResponse} = props
  const {imageUrl, name, location, id} = eventDetails

  const onClickEvent = () => {
    updateEventStatusResponse(id)
  }

  return (
    <li className="events-list">
      <img src={imageUrl} alt="event" className="img" onClick={onClickEvent} />
      <div>
        <h1 className="heading">{name}</h1>
        <p className="location">{location}</p>
      </div>
    </li>
  )
}

export default EventItem
