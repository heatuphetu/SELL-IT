const tiles = [
  { id: "fashion", label: "Fashion", emoji: "👗" },
  { id: "electronics", label: "Electronics", emoji: "📱" },
  { id: "home-garden", label: "Home & Garden", emoji: "🏡" },
  { id: "collectibles", label: "Collectibles", emoji: "🧸" },
  { id: "trading-cards", label: "Trading Cards", emoji: "🃏" },
  { id: "motors", label: "Motors", emoji: "🚗" },
  { id: "sporting-goods", label: "Sporting Goods", emoji: "🏀" },
];

export default function FeatureRow({ onSelectCategory }) {
  return (
    <section className="featureRow">
      <h3 className="featureTitle">Shop by category</h3>

      <div className="featureGrid">
        {tiles.map((x) => (
          <button
            key={x.id}
            className="featureItem"
            type="button"
            onClick={() => onSelectCategory?.(x.label)}
            aria-label={`Filter by ${x.label}`}
          >
            <div className="featureCircle">
              <span className="featureEmoji">{x.emoji}</span>
            </div>
            <div className="featureLabel">{x.label}</div>
          </button>
        ))}
      </div>
    </section>
  );
}
