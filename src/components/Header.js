export default function Header() {
  return (
    <header className="siteHeader">
      <div className="container headerTop">
        <div>
          <div className="brandTitle">SellIt</div>
          <div className="brandTagline">Your Online Marketplace</div>
        </div>

        <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
          <input className="searchInput" type="text" placeholder="Search for anything" />
          <button className="btn" type="submit">Search</button>
        </form>
      </div>

      <nav className="navBar">
        <div className="container navInner">
          <a className="navLink" href="/">Home</a>
          <a className="navLink" href="/browse">Browse</a>
          <a className="navLink" href="/sell">Sell</a>
          <a className="navLink" href="/notifications">Notifications</a>

          <div className="navSpacer" />

          <a className="navLink" href="/login">Login</a>
          <a className="navLink" href="/signup">Sign Up</a>
        </div>
      </nav>
    </header>
  );
}
