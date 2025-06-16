import "./header.css"

const Header = () => {
  return (
  <>
  <nav className="navbar">
      <div className="nintendo-logo">
        <img src="/nintendo-logo.svg" />
      </div>
      <ul className='header'>
        <li><img src="search.svg" />
          Cerca</li>
        <li><img src="wishlist.svg" />
          Whishlist</li>
        <li><img src="login.svg" />
          Accedi</li>
    </ul>
  </nav>
  </>
  )
}

export default Header