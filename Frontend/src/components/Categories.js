import { categories } from "../data/categories";

export default function CategoryBar() {
  return (
    <div className="catBar">
      <div className="container catBarInner">
        <button className="catPill active" type="button">Saved</button>
        <button className="catPill" type="button">Top Auctions</button>

        {categories.map((c) => (
          <button key={c} className="catPill" type="button">
            {c}
          </button>
        ))}
      </div>
    </div>
  );
}
