// src/components/Listings.js
import { categories as baseCategories } from "../data/categories";

export default function Listings({
  listings = [],
  selectedCategory = "All",
  onSelectCategory,
}) {
  const tabs = ["All", "Saved", "Top Auctions", ...baseCategories];

  return (
    <section className="card listingsWrap" id="listings">
      <div className="listingsHeader">
        <div>
          <h2 className="sectionTitle listingsTitle">
            Featured Listings{selectedCategory !== "All" ? ` — ${selectedCategory}` : ""}
          </h2>
          <p className="listingsSubtitle">Popular picks across categories.</p>
        </div>

        <div className="listingsTabs" role="tablist" aria-label="Listing categories">
          {tabs.map((t) => (
            <button
              key={t}
              type="button"
              className={`miniPill ${selectedCategory === t ? "active" : ""}`}
              onClick={() => onSelectCategory?.(t)}
              role="tab"
              aria-selected={selectedCategory === t}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

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
            <article key={item.id} className="card listingCard">
              <div className="listingTitle">{item.title}</div>

              <div className="meta">Price: ${item.price}</div>
              <div className="meta">Condition: {item.condition}</div>

              <div className="badgeRow">
                <span className="badge">{item.delivery}</span>
                {item.category && <span className="badge">{item.category}</span>}
                {item.isAuction && <span className="badge">Auction</span>}
              </div>

              <div className="cardActions">
                <button className="btn" type="button">
                  View Item
                </button>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
