import { categories } from "../data/categories";

export default function Categories() {
  return (
    <aside className="card" style={{ padding: 14 }}>
      <h2 className="sectionTitle">Categories</h2>
      <ul className="list">
        {categories.map((c) => (
          <li className="catItem" key={c}>
            {c}
          </li>
        ))}
      </ul>
    </aside>
  );
}
