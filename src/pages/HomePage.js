import { useMemo, useState } from "react";

import Hero from "../components/Hero";
import FeatureRow from "../components/FeatureRow";
import PromoStrip from "../components/PromoStrip";
import Listings from "../components/Listings";
import CategoryBar from "../components/CategoryBar";

import { listings as allListings } from "../data/listings";

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredListings = useMemo(() => {
    if (selectedCategory === "All") return allListings;
    return allListings.filter(
      (x) => (x.category || "").toLowerCase() === selectedCategory.toLowerCase()
    );
  }, [selectedCategory]);

  return (
    <div className="container">
      <CategoryBar selected={selectedCategory} onSelect={setSelectedCategory} />

      <Hero selectedCategory={selectedCategory} />

      <Listings listings={filteredListings} selectedCategory={selectedCategory} />

      <FeatureRow onSelectCategory={setSelectedCategory} />

      <PromoStrip />
    </div>
  );
}
