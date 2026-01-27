export default function Hero() {
  return (
    <section className="hero card">
      <div className="heroLeft">
        <div className="heroImgBox">
          <div className="heroImgPlaceholder">Product</div>
        </div>
      </div>

      <div className="heroRight">
        <h2 className="heroTitle">Complete your set. Your way.</h2>
        <p className="heroDesc">
          Choose how you collect items from your favorite categories.
        </p>
        <button className="btn heroBtn" type="button">Explore deals</button>

        <div className="heroDots" aria-label="carousel dots">
          <span className="dot active" />
          <span className="dot" />
          <span className="dot" />
          <span className="dot" />
        </div>
      </div>
    </section>
  );
}