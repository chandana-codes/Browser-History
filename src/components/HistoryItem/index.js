import './index.css'

const HistoryItem = props => {
  const {historyDetails, deleteHistoryItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetails

  const deleteBrowserHistory = () => {
    deleteHistoryItem(id)
  }

  return (
    <li className="historyItemContainer">
      <div className="historyItem">
        <p>{timeAccessed}</p>
        <div className="historyDetails">
          <img src={logoUrl} alt="domain logo" className="logoUrl" />
          <p className="logoTitle">{title}</p>
          <p className="domainUrl">{domainUrl}</p>
        </div>
        <button
          type="button"
          className="deleteBtn"
          data-testid="delete"
          onClick={deleteBrowserHistory}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="deleteIcon"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryItem
