import { useState } from "react";
import sinayaLogo from "./assets/logo/Sinaya.png";
import apolloLogo from "./assets/logo/apollo.png";
import usepLogo from "./assets/logo/usep.png";
import "./App.css";

const features = [
  {
    number: "01",
    symbol: "≈",
    title: "Pond monitoring",
    description:
      "See water readings and identify which parameters are changing in each pond.",
    status: "Simulated readings",
  },
  {
    number: "02",
    symbol: "◎",
    title: "Satellite imagery",
    description:
      "Explore your farm and its surroundings through dated Copernicus satellite images.",
    status: "Copernicus connection ready",
  },
  {
    number: "03",
    symbol: "☁",
    title: "Weather context",
    description:
      "Bring rainfall, temperature, and wind information into your pond-monitoring view.",
    status: "Integration planned",
  },
  {
    number: "04",
    symbol: "↗",
    title: "SMS alert previews",
    description:
      "Preview messages showing which pond and water parameter need attention.",
    status: "Simulated messages",
  },
];

function SwimmingFish() {
  return (
    <div className="fish-track" aria-hidden="true">
      <svg
        className="swimming-fish"
        viewBox="0 0 240 120"
        fill="none"
      >
        <defs>
          <linearGradient id="fish-color" x1="30" y1="20" x2="200" y2="100">
            <stop stopColor="#249F93" />
            <stop offset="1" stopColor="#7AE8D4" />
          </linearGradient>
        </defs>

        <g className="fish-tail">
          <path
            d="M80 60 20 18 30 60 20 102Z"
            fill="#249F93"
          />
        </g>

        <path
          d="M68 60C106 8 171 9 218 60C171 111 106 112 68 60Z"
          fill="url(#fish-color)"
        />
        <path
          d="M107 28 137 8 164 28"
          fill="#249F93"
        />
        <path
          d="M117 78 140 105 158 81"
          fill="#168C8A"
        />
        <path
          d="M174 40Q160 60 174 80"
          stroke="#101B38"
          strokeWidth="3"
          opacity=".35"
        />
        <circle cx="188" cy="48" r="5" fill="#101B38" />
        <circle cx="190" cy="46" r="1.5" fill="#F5F5F5" />
      </svg>
    </div>
  );
}

function App() {
  const [paused, setPaused] = useState(false);
  const [notice, setNotice] = useState("");

  function openAccountNotice(action: string) {
    setNotice(
      `${action} is coming next. This landing-page preview does not collect account details yet.`,
    );
  }

  return (
    <div className={`site${paused ? " motion-paused" : ""}`}>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <header className="site-header">
        <nav className="container navigation" aria-label="Main navigation">
          <a href="#home" className="brand" aria-label="Sinaya home">
            <img src={sinayaLogo} alt="" />
            <span>SINAYA</span>
          </a>

          <div className="nav-links">
            <a href="#features">Features</a>
            <a href="#about">About</a>
          </div>

          <button
            className="button button-outline nav-login"
            onClick={() => openAccountNotice("Login")}
          >
            Log In <span aria-hidden="true">↗</span>
          </button>
        </nav>
      </header>

      <main id="main">
        <section className="hero" id="home" aria-labelledby="hero-title">
          <div className="hero-glow" aria-hidden="true" />

          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">
                <span className="small-dot" />
                MADE FOR EVERYDAY POND CARE
              </p>

              <h1 id="hero-title">
                Your pond,
                <br />
                <span>better understood.</span>
              </h1>

              <p className="hero-description">
                A clearer view of your water, weather, and surroundings.
                Sinaya brings pond information together so you can
                understand changes and plan your next steps.
              </p>

              <a className="text-link" href="#features">
                Discover what’s inside <span aria-hidden="true">↓</span>
              </a>

              <div className="hero-tags" aria-label="Project focus">
                <span>Pond insights</span>
                <span>Weather context</span>
                <span>Clear alerts</span>
              </div>
            </div>

            <aside className="welcome-card" aria-labelledby="welcome-title">
              <div className="card-topline">
                <span className="eyebrow">YOUR POND COMPANION</span>
                <span className="card-mark" aria-hidden="true">≈</span>
              </div>

              <h2 id="welcome-title">Welcome to Sinaya.</h2>
              <p>
                A simple place to start understanding what’s happening
                in your pond.
              </p>

              <button
                className="button button-primary"
                onClick={() => openAccountNotice("Account registration")}
              >
                Create Account <span aria-hidden="true">↗</span>
              </button>

              <a className="button button-outline" href="#demo">
                Explore Demo <span aria-hidden="true">→</span>
              </a>

              <p className="login-prompt">
                Already registered?{" "}
                <button onClick={() => openAccountNotice("Login")}>
                  Log in
                </button>
              </p>

              <div className="prototype-note">
                Hackathon prototype · Demo readings and SMS previews
              </div>
            </aside>
          </div>

          <div className="water-scene">
            <div className="water-line water-line-one" aria-hidden="true" />
            <div className="water-line water-line-two" aria-hidden="true" />
            <SwimmingFish />
            <span className="water-caption">A little clarity beneath the surface.</span>
            <button
              className="motion-toggle"
              aria-pressed={paused}
              onClick={() => setPaused(!paused)}
            >
              {paused ? "Play animation" : "Pause animation"}
            </button>
          </div>
        </section>

        <section
          className="section container"
          id="features"
          aria-labelledby="features-title"
        >
          <div className="section-heading">
            <div>
              <p className="eyebrow">WHAT’S INSIDE</p>
              <h2 id="features-title">A clearer picture of your pond.</h2>
            </div>
            <p>
              Connected information. Simple explanations.
              Tools designed around everyday farming.
            </p>
          </div>

          <div className="feature-grid">
            {features.map((feature) => (
              <article className="feature-card" key={feature.number}>
                <div className="feature-top">
                  <span className="feature-icon" aria-hidden="true">
                    {feature.symbol}
                  </span>
                  <span className="feature-number">{feature.number}</span>
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                <span className="feature-status">{feature.status}</span>
              </article>
            ))}
          </div>

          <div className="ai-note">
            <span className="eyebrow">COMING NEXT</span>
            <p>
              AI assistance to explain pond readings and alerts in
              simpler language.
            </p>
          </div>
        </section>

        <section className="container demo-section" id="demo">
          <div className="demo-copy">
            <p className="eyebrow">A GLIMPSE OF THE EXPERIENCE</p>
            <h2>See the change.<br />Understand the alert.</h2>
            <p>
              Each alert identifies the pond, the parameter, and the
              readings behind it.
            </p>
            <span className="demo-label">Illustrative demo · Not live data</span>
          </div>

          <article className="demo-card" aria-label="Example pond alert">
            <div className="demo-heading">
              <span>POND 02</span>
              <span className="demo-label">Sample alert</span>
            </div>

            <h3>Oxygen reading decreased</h3>

            <div className="reading-comparison">
              <div>
                <span>Previous</span>
                <strong>5.8 <small>mg/L</small></strong>
              </div>
              <span className="reading-arrow" aria-hidden="true">→</span>
              <div>
                <span>Current</span>
                <strong>2.9 <small>mg/L</small></strong>
              </div>
            </div>

            <p className="demo-message">
              Example alert: verify the reading and inspect pond conditions.
            </p>

            <p className="demo-footnote">
              SMS preview only. No message has been sent.
            </p>
          </article>
        </section>

        <section className="container about-section" id="about">
          <p className="eyebrow">BUILT WITH FARMERS IN MIND</p>
          <h2>Clear information.<br />Room for better decisions.</h2>
          <p>
            Sinaya is a student-built aquaculture monitoring prototype
            focused on making pond information easier to understand.
            It brings together local readings and environmental context
            in a layout designed for phones.
          </p>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">
          <div className="footer-main">
            <div className="footer-identity">
              <div className="footer-logos">
                <img src={sinayaLogo} alt="Sinaya" />
                <img src={apolloLogo} alt="Apollo Creations" />
                <img src={usepLogo} alt="University of Southeastern Philippines" />
              </div>
              <p>Clearer pond insights for everyday farming.</p>
              <p className="affiliation">
                A student project from the University of Southeastern Philippines.
              </p>
            </div>

            <div className="footer-links">
              <h3>EXPLORE</h3>
              <a href="#home">Home</a>
              <a href="#features">Features</a>
              <a href="#about">About Sinaya</a>
            </div>

            <div className="footer-links">
              <h3>GET STARTED</h3>
              <a href="#demo">Explore Demo</a>
              <button onClick={() => openAccountNotice("Login")}>
                Log In
              </button>
            </div>
          </div>

          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} Sinaya. All rights reserved.</span>
            <span className="developer-credit">
              Developed by <strong>Apollo Creations</strong>
            </span>
          </div>
        </div>
      </footer>

      {notice && (
        <div
          className="notice-backdrop"
          onClick={(event) => {
            if (event.target === event.currentTarget) setNotice("");
          }}
        >
          <dialog
            open
            className="notice-dialog"
            aria-labelledby="notice-title"
            ref={(element) => {
              element?.querySelector<HTMLButtonElement>("button")?.focus();
            }}
            onKeyDown={(event) => {
              if (event.key === "Escape") setNotice("");
              // The close button is the dialog's only interactive element.
              if (event.key === "Tab") event.preventDefault();
            }}
          >
            <p className="eyebrow">LANDING PAGE PREVIEW</p>
            <h2 id="notice-title">One step at a time.</h2>
            <p>{notice}</p>
            <button
              className="button button-primary"
              onClick={() => setNotice("")}
            >
              Got it
            </button>
          </dialog>
        </div>
      )}
    </div>
  );
}

export default App;