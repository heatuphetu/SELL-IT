const tech = [
  { id: "t1", label: "Laptops" },
  { id: "t2", label: "Tablets" },
  { id: "t3", label: "Headphones" },
  { id: "t4", label: "Speakers" },
  { id: "t5", label: "Gaming" },
  { id: "t6", label: "Video games" },
  { id: "t7", label: "PC gaming" },
];

export default function FeatureRow() {
  return (
    <section className="featureRow">
      <h3 className="featureTitle">Plug into new tech</h3>

      <div className="featureGrid">
        {tech.map((x) => (
          <button key={x.id} className="featureItem" type="button">
            <div className="featureCircle" />
            <div className="featureLabel">{x.label}</div>
          </button>
        ))}
      </div>
    </section>
  );
}
