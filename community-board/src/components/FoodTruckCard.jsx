const FoodTruckCard = ({ name, cuisine, image, menuUrl }) => {
  return (
    <div className="card">
      <img src={image} alt={name} className="card-image" />
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className="card-subtitle">{cuisine}</p>
        <a
          href={menuUrl}
          target="_blank"
          rel="noreferrer"
          className="card-button"
        >
          View Menu
        </a>
      </div>
    </div>
  )
}

export default FoodTruckCard
