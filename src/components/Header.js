import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="siteHeader">
      <div className="topBar">
        <div className="container topBarInner">
          <div className="topLeft">
            Hi! <Link className="topLink" to="/login">Sign in</Link> or{" "}
            <Link className="topLink" to="/signup">register</Link>
          </div>

          <div className="topRight">
            <Link className="topLink" to="/sell">Sell</Link>
            <span className="topSep">|</span>
            <button className="iconBtn" type="button" aria-label="Notifications">🔔</button>
            <button className="iconBtn" type="button" aria-label="Cart">🛒</button>
          </div>
        </div>
      </div>

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
          <Link className="navLink" to="/">Home</Link>
          <Link className="navLink" to="/browse">Browse</Link>
          <Link className="navLink" to="/sell">Sell</Link>
          <Link className="navLink" to="/notifications">Notifications</Link>

          <div className="navSpacer" />

          <Link className="navLink" to="/login">Login</Link>
          <Link className="navLink" to="/signup">Sign Up</Link>
        </div>
      </nav>
    </header>
  );
}
