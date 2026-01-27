import Hero from "../components/Hero";
import FeatureRow from "../components/FeatureRow";
import PromoStrip from "../components/PromoStrip";
import Listings from "../components/Listings";

export default function HomePage() {
  return (
    <div className="container">
      <Hero />

      {/* Listings only — no sidebar categories */}
      <Listings />

      <FeatureRow />
      <PromoStrip />
    </div>
  );
}
