import { useEffect, useMemo, useState } from "react";

export default function Hero() {
  const slides = useMemo(
    () => [
      {
        id: "electronics",
        title: "Complete your set. Your way.",
        desc: "Choose how you collect items from your favorite categories.",
        cta: "Explore deals",
        badge: "Electronics",
      },
      {
        id: "home-garden",
        title: "Refresh your space for less.",
        desc: "Home & Garden picks that ship fast or pickup locally.",
        cta: "Shop Home & Garden",
        badge: "Home & Garden",
      },
      {
        id: "fashion",
        title: "New fits. Better prices.",
        desc: "Trending fashion deals from trusted sellers.",
        cta: "Shop Fashion",
        badge: "Fashion",
      },
      {
        id: "trading-cards",
        title: "Chase the next pull.",
        desc: "Find singles and sealed packs across top series.",
        cta: "Browse Trading Cards",
        badge: "Trading Cards",
      },
    ],
    []
  );

  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-advance every 2 seconds
  useEffect(() => {
    if (isPaused) return;
    const t = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 2000);
    return () => clearInterval(t);
  }, [isPaused, slides.length]);

  const current = slides[index];

  const goTo = (i) => {
    setIndex(i);
    setIsPaused(true);
    // resume after user interaction (optional)
    setTimeout(() => setIsPaused(false), 6000);
  };

  const next = () => goTo((index + 1) % slides.length);
  const prev = () => goTo((index - 1 + slides.length) % slides.length);

  return (
    <section
      className="hero card"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="heroLeft">
        <div className="heroImgBox">
          <div className="heroImgPlaceholder">{current.badge}</div>
        </div>
      </div>

      <div className="heroRight">
        <div className="heroBadge">{current.badge}</div>

        <h2 className="heroTitle">{current.title}</h2>
        <p className="heroDesc">{current.desc}</p>

        <button className="btn heroBtn" type="button">
          {current.cta}
        </button>

        <div className="heroBottom">
          <div className="heroDots" aria-label="carousel dots">
            {slides.map((s, i) => (
              <button
                key={s.id}
                className={`dotBtn ${i === index ? "active" : ""}`}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Go to ${s.badge}`}
              >
                <span className="dot" />
              </button>
            ))}
          </div>

          <div className="heroControls">
            <button className="heroCtrl" type="button" onClick={prev} aria-label="Previous">
              ‹
            </button>
            <button className="heroCtrl" type="button" onClick={next} aria-label="Next">
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
