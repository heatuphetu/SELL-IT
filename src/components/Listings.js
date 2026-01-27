import { listings as defaultListings } from "../data/listings";

export default function Listings({ listings = defaultListings, selectedCategory = "All" }) {
  return (
    <section className="card" style={{ padding: 14 }}>
      <h2 className="sectionTitle">
        Featured Listings {selectedCategory !== "All" ? `— ${selectedCategory}` : ""}
      </h2>

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
                <button className="btn" type="button">View Item</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
