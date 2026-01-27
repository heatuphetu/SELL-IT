import Header from "./components/Header";
import Categories from "./components/Categories";
import Listings from "./components/Listings";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />

      <main className="container">
        <div className="pageGrid">
          <Categories />
          <Listings />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
