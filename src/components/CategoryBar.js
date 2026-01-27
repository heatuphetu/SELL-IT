import { useEffect, useRef } from "react";
import { categories } from "../data/categories";

export default function CategoryBar({ selected = "All", onSelect }) {
  const scrollerRef = useRef(null);

  const items = ["All", "Saved", "Top Auctions", ...categories];

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const active = scroller.querySelector('[data-active="true"]');
    if (!active) return;

    active.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  }, [selected]);

  return (
    <div className="catBar">
      <div ref={scrollerRef} className="container catBarInner">
        {items.map((label) => {
          const isActive = selected === label;
          return (
            <button
              key={label}
              className={`catPill ${isActive ? "active" : ""}`}
              data-active={isActive ? "true" : "false"}
              type="button"
              onClick={() => onSelect?.(label)}
            >
              {label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
