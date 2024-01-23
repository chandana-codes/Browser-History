import './index.css'

const Navbar = props => {
  const {searchInput, onSearchHistory} = props

  return (
    <div className="navBar">
      <img
        src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
        alt="app logo"
        className="appLogo"
      />
      <div className="searchContainer">
        <img
          src="https://assets.ccbp.in/frontend/react-js/search-img.png"
          alt="search"
          className="searchImg"
        />
        <input
          type="search"
          className="searchBar"
          value={searchInput}
          placeholder="Search History"
          onChange={onSearchHistory}
        />
      </div>
    </div>
  )
}

export default Navbar
