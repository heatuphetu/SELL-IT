import Categories from "../components/Categories";
import Listings from "../components/Listings";

export default function HomePage() {
  return (
    <div className="pageGrid">
      <Categories />
      <Listings />
    </div>
  );
}
