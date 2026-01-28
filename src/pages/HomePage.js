import { useMemo, useRef, useState } from "react";

import Hero from "../components/Hero";
import FeatureRow from "../components/FeatureRow";
import PromoStrip from "../components/PromoStrip";
import Listings from "../components/Listings";

import { listings as allListings } from "../data/listings";

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const listingsRef = useRef(null);

  const filteredListings = useMemo(() => {
    if (selectedCategory === "All") return allListings;
    return allListings.filter(
      (x) => (x.category || "").toLowerCase() === selectedCategory.toLowerCase()
    );
  }, [selectedCategory]);

  const jumpToListings = () => {
    listingsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
  <>
    <Hero
      onSelectCategory={setSelectedCategory}
      onJumpToListings={jumpToListings}
    />

    <div ref={listingsRef}>
      <Listings
        listings={filteredListings}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
    </div>

    <FeatureRow onSelectCategory={setSelectedCategory} />
    <PromoStrip />
  </>
);
}
