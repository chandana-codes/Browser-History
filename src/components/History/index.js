import HistoryItem from '../HistoryItem/index'
import './index.css'

const History = props => {
  const {newHistoryList, deleteHistoryItem} = props
  if (newHistoryList.length === 0) {
    return <p className="emptyContainer">There is no History to show</p>
  }

  return (
    <div className="historyContainer">
      <ul className="listContainer">
        {newHistoryList.map(eachHistory => (
          <HistoryItem
            key={eachHistory.id}
            historyDetails={eachHistory}
            deleteHistoryItem={deleteHistoryItem}
          />
        ))}
      </ul>
    </div>
  )
}

export default History
