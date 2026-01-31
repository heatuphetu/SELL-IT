import { useEffect, useMemo, useState } from "react";

import imgElectronics from "../assets/hero/electronics.jpg";
import imgFashion from "../assets/hero/fashion.jpg";
import imgHome from "../assets/hero/home.jpg";
import imgCards from "../assets/hero/cards.jpg";

export default function Hero({ onSelectCategory, onJumpToListings }) {
  const slides = useMemo(
    () => [
      {
        id: "electronics",
        category: "Electronics",
        title: "Upgrade your tech for less.",
        desc: "Phones, laptops, accessories — deals from local sellers.",
        cta: "Shop Electronics",
        img: imgElectronics,
      },
      {
        id: "fashion",
        category: "Fashion",
        title: "New fits. Better prices.",
        desc: "Trending styles — buy now or make an offer.",
        cta: "Shop Fashion",
        img: imgFashion,
      },
      {
        id: "home-garden",
        category: "Home & Garden",
        title: "Make your space feel new.",
        desc: "Furniture, decor, tools — shipped or pickup nearby.",
        cta: "Shop Home & Garden",
        img: imgHome,
      },
      {
        id: "trading-cards",
        category: "Trading Cards",
        title: "Pull your next favorite card.",
        desc: "Singles and sealed packs across top series.",
        cta: "Shop Trading Cards",
        img: imgCards,
      },
    ],
    []
  );

  const [index, setIndex] = useState(0);

  // Auto-slide every 2 seconds (no hover pause)
  useEffect(() => {
    const t = setInterval(() => {
      setIndex((p) => (p + 1) % slides.length);
    }, 2000);

    return () => clearInterval(t);
  }, [slides.length]);

  const current = slides[index];

  const goTo = (i) => setIndex(i);
  const next = () => setIndex((p) => (p + 1) % slides.length);
  const prev = () => setIndex((p) => (p - 1 + slides.length) % slides.length);

  const handleCTA = () => {
    onSelectCategory?.(current.category);
    onJumpToListings?.();
  };

  return (
    <section className="heroReal">
      <div className="heroRealInner">
        <div className="heroRealText">
          <div className="heroTag">{current.category}</div>
          <h1 className="heroRealTitle">{current.title}</h1>
          <p className="heroRealDesc">{current.desc}</p>

          <button className="btn heroRealBtn" type="button" onClick={handleCTA}>
            {current.cta}
          </button>
        </div>

        <div className="heroRealMedia">
          <img className="heroImg" src={current.img} alt={current.category} />
        </div>
      </div>

      <div className="heroRealBottom">
        <div className="heroDots">
          {slides.map((s, i) => (
            <button
              key={s.id}
              type="button"
              className={`heroDot ${i === index ? "active" : ""}`}
              onClick={() => goTo(i)}
              aria-label={`Go to ${s.category}`}
            />
          ))}
        </div>

        {/* Keep only left/right arrows */}
        <div className="heroControls">
          <button className="heroCtrlBtn" type="button" onClick={prev} aria-label="Previous">
            ‹
          </button>
          <button className="heroCtrlBtn" type="button" onClick={next} aria-label="Next">
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
