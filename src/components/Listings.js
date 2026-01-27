import { categories } from "../data/categories";

export default function Listings({
  listings = [],
  selectedCategory = "All",
  onSelectCategory,
}) {
  const tabs = ["All", "Saved", "Top Auctions", ...categories];

  return (
    <section className="card listingsWrap">
      {/* Header row: title + tabs */}
      <div className="listingsHeader">
        <h2 className="sectionTitle listingsTitle">
          Featured Listings
          {selectedCategory !== "All" ? ` — ${selectedCategory}` : ""}
        </h2>

        <div className="listingsTabs">
          {tabs.map((t) => (
            <button
              key={t}
              type="button"
              className={`miniPill ${selectedCategory === t ? "active" : ""}`}
              onClick={() => onSelectCategory?.(t)}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      {listings.length === 0 ? (
        <div className="emptyState">
          <div className="emptyTitle">No listings found</div>
          <div className="emptyDesc">
            Try another category or switch back to <b>All</b>.
          </div>
        </div>
      ) : (
        <div className="listingGrid">
          {listings.map((item) => (
            <div key={item.id} className="card listingCard">
              <div className="listingTitle">{item.title}</div>

              <div className="meta">Price: ${item.price}</div>
              <div className="meta">Condition: {item.condition}</div>

              <div className="badgeRow">
                <span className="badge">{item.delivery}</span>
                {item.category && <span className="badge">{item.category}</span>}
              </div>

              <div className="cardActions">
                <button className="btn" type="button">
                  View Item
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
