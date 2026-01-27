import { listings } from "../data/listings";

export default function Listings() {
  return (
    <section className="card" style={{ padding: 14 }}>
      <h2 className="sectionTitle">Featured Listings</h2>

      <div className="listingGrid">
        {listings.map((item) => (
          <article className="card listingCard" key={item.id}>
            <h3 className="listingTitle">{item.title}</h3>

            <p className="meta">Price: ${item.price}</p>
            <p className="meta">Condition: {item.condition}</p>

            <div className="badgeRow">
              <span className="badge">{item.delivery}</span>
            </div>

            <div className="cardActions">
              <button className="btn" type="button">View Item</button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
