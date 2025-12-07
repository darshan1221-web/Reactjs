import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));

function Dance() {
  return (<>
   <style>{`
  /* ---------- NAV BAR FIXED ---------- */
  :root { 
    --nav-h: 72px; 
    --accent: #c77dff; 
    --muted: rgba(255,255,255,0.85); 
    --glow: rgba(199,125,255,0.35);
  }

  .navbar {
    position: fixed;
    top: 0; left: 0; right: 0;
    height: var(--nav-h);
    z-index: 1060;
    display: flex;
    align-items: center;
    padding: 0.5rem 1rem;
    background: rgba(0,0,0,0.25);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    border-bottom: 1px solid rgba(255,255,255,0.06);
  }

  body { 
    padding-top: var(--nav-h); 
    margin:0; 
    font-family: system-ui, sans-serif; 
  }

  /* ---------- BACKGROUND ---------- */
  html, body { height: 100%; }
  body {
    background:
      radial-gradient(circle at 20% 20%, rgba(255,200,255,0.08), transparent 60%),
      radial-gradient(circle at 80% 80%, rgba(200,120,255,0.06), transparent 60%),
      linear-gradient(135deg, #100a1c, #2a0f32 45%, #3f1f45 100%);
    background-attachment: fixed;
    color: #f8f9fa;
  }

  /* ---------- GLOBAL HOVER EFFECTS ---------- */

  /* elegant link hover */
  .navbar .nav-link {
    transition: color .25s ease, opacity .25s ease;
    opacity: .85;
  }
  .navbar .nav-link:hover {
    color: var(--accent);
    opacity: 1;
  }

  /* smooth button hover */
  .btn-accent {
    background: linear-gradient(90deg, var(--accent), #ff7ab6);
    border: none;
    color: #111;
    font-weight: 600;
    box-shadow: 0 6px 18px rgba(199,125,255,0.18);
    transition: transform .25s ease, box-shadow .25s ease;
  }
  .btn-accent:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 25px var(--glow);
  }

  .btn-outline-light:hover {
    background: rgba(255,255,255,0.18);
    color: #fff;
  }

  /* ---------- CARD HOVER EFFECTS ---------- */
  .card-hover {
    transition: transform .28s ease, box-shadow .28s ease, border-color .25s ease;
    border: 1px solid rgba(255,255,255,0.08);
    background: rgba(255,255,255,0.02);
    backdrop-filter: blur(6px);
  }
  .card-hover:hover {
    transform: translateY(-10px);
    box-shadow: 0 18px 45px rgba(0,0,0,0.55);
    border-color: var(--accent);
  }

  /* image hover – soft zoom */
  .team-img,
  .card-hover img {
    transition: transform .5s ease;
  }
  .card-hover:hover img,
  .team-img:hover {
    transform: scale(1.05);
  }

  /* service icons */
  .service-ico {
    font-size: 1.6rem;
    width:44px; height:44px;
    display:inline-flex;
    align-items:center; justify-content:center;
    border-radius:10px;
    background: rgba(255,255,255,0.06);
    color: var(--muted);
    transition: background .3s ease, transform .3s ease, box-shadow .3s ease;
  }
  .service-ico:hover {
    background: rgba(199,125,255,0.18);
    box-shadow: 0 0 12px rgba(199,125,255,0.4);
    transform: translateY(-4px) scale(1.08);
  }

  /* ---------- HERO ---------- */
  .hero {
    min-height: calc(100vh - var(--nav-h));
    display: flex;
    align-items: center;
    padding: 4rem 0;
  }
  .hero .display-4 { 
    color: var(--muted); 
    font-weight:700; 
    letter-spacing: -0.5px; 
  }
  .hero p.lead { color: rgba(248,249,250,0.85); }

  /* ---------- PANEL ---------- */
  .panel {
    background: rgba(255,255,255,0.03);
    border-radius: .6rem;
    padding: 2rem;
    box-shadow: 0 8px 30px rgba(0,0,0,0.45);
    backdrop-filter: blur(4px);
    transition: transform .25s ease, box-shadow .25s ease;
  }
  .panel:hover {
    transform: translateY(-4px);
    box-shadow: 0 16px 45px rgba(0,0,0,0.55);
  }

  /* ---------- CONTACT ---------- */
  .form-control, 
  .form-control:focus { 
    background: rgba(255,255,255,0.03); 
    border: 1px solid rgba(255,255,255,0.12); 
    color: #fff; 
    transition: border-color .25s ease;
  }
  .form-control:focus {
    border-color: var(--accent);
    box-shadow: 0 0 8px var(--glow);
  }

  label.form-label { color: rgba(255,255,255,0.9); }

  /* ---------- FOOTER ---------- */
  footer {
    background: rgba(0,0,0,0.38);
    backdrop-filter: blur(6px);
    color: rgba(255,255,255,0.85);
    padding: 2rem 0;
  }

  /* ---------- RESPONSIVE ---------- */
  @media (max-width: 767.98px) {
    :root { --nav-h: 64px; }
    .hero { padding: 3rem 0; }
  }
`}</style>

    {/* NAVBAR */}
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container">
        <a className="navbar-brand fw-bold text-white" href="#">
          Salon Lumière
        </a>
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
          aria-controls="mainNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav ms-auto align-items-lg-center">
            <li className="nav-item">
              <a className="nav-link text-white" href="#home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#services">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#team">
                Team
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#contact">
                Contact
              </a>
            </li>
            <li className="nav-item ms-2">
              <a className="btn btn-sm btn-light text-dark" href="#contact">
                Book Now
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    {/* HERO */}
    <header id="home" className="hero">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="panel">
              <h1 className="display-4">Refine your look. Embrace the glow.</h1>
              <p className="lead">
                Luxury hair services — cuts, color, treatments and styling by
                expert stylists. Relax in a calm space built for you.
              </p>
              <div className="mt-4">
                <a className="btn btn-accent btn-lg me-2" href="#services">
                  View Services
                </a>
                <a className="btn btn-outline-light btn-lg" href="#contact">
                  Book Appointment
                </a>
              </div>
              <ul className="list-unstyled d-flex gap-3 mt-4 small">
                <li className="text-white">💇 Expert stylists</li>
                <li className="text-white">✨ Premium products</li>
                <li className="text-white">🕒 Flexible hours</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 text-center mt-4 mt-lg-0">
            <div className="panel">
              <img
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1200&q=80"
                alt="salon"
                className="img-fluid rounded"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
    {/* ABOUT */}
    <section id="about" className="py-5">
      <div className="container">
        <div className="panel">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h2>About Salon Lumière</h2>
              <p>
                We blend craftsmanship and care. From precision cuts to bespoke
                color, our stylists create beautiful, wearable looks tailored to
                you.
              </p>
              <p className="mb-0">
                Our salon uses professional, low-damage formulas and prioritizes
                hair health above all.
              </p>
            </div>
            <div className="col-md-6 text-end d-none d-md-block">
              <img
                src="https://images.unsplash.com/photo-1506086679524-8b07f6f9d3d6?auto=format&fit=crop&w=800&q=60"
                alt="chair"
                className="img-fluid rounded"
                style={{ maxWidth: 360 }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* SERVICES */}
    <section id="services" className="py-5">
      <div className="container">
        <h3 className="mb-4 text-white">Services</h3>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card card-hover p-3">
              <div className="d-flex align-items-start gap-3">
                <div className="service-ico">✂️</div>
                <div>
                  <h5 className="mb-1">Precision Cut</h5>
                  <p className="small text-muted mb-0">
                    Tailored shape and texture for your lifestyle.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card card-hover p-3">
              <div className="d-flex align-items-start gap-3">
                <div className="service-ico">🎨</div>
                <div>
                  <h5 className="mb-1">Color &amp; Highlights</h5>
                  <p className="small text-muted mb-0">
                    Vivid color, balayage and glossy finishes.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card card-hover p-3">
              <div className="d-flex align-items-start gap-3">
                <div className="service-ico">💆‍♀️</div>
                <div>
                  <h5 className="mb-1">Treatments</h5>
                  <p className="small text-muted mb-0">
                    Bond-repair, keratin &amp; deep nourishment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* TEAM */}
    <section id="team" className="py-5 bg-light">
      <div className="container">
        <h3 className="mb-4 text-dark">Our Stylists</h3>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card card-hover">
              <img
                src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1000&q=60"
                alt="stylist"
                className="team-img"
              />
              <div className="p-3">
                <h5 className="mb-1">Maya</h5>
                <p className="small text-muted mb-0">
                  Color Specialist • 8 yrs experience
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card card-hover">
              <img
                src="https://images.unsplash.com/photo-1544006659-f0b21884ce1d?auto=format&fit=crop&w=1000&q=60"
                alt="stylist"
                className="team-img"
              />
              <div className="p-3">
                <h5 className="mb-1">Arjun</h5>
                <p className="small text-muted mb-0">
                  Cutting &amp; Styling • 10 yrs experience
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card card-hover">
              <img
                src="https://images.unsplash.com/photo-1544005315-9b8a9a31d6b0?auto=format&fit=crop&w=1000&q=60"
                alt="stylist"
                className="team-img"
              />
              <div className="p-3">
                <h5 className="mb-1">Leah</h5>
                <p className="small text-muted mb-0">
                  Treatments &amp; Extensions • 7 yrs experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* CONTACT */}
    <section id="contact" className="py-5">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-6">
            <div className="panel">
              <h4>Book an Appointment</h4>
              <form>
                <div className="mb-3">
                  <label className="form-label">Full name</label>
                  <input className="form-control" type="text" required="" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Phone</label>
                  <input className="form-control" type="tel" required="" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Service</label>
                  <select className="form-select">
                    <option>Precision Cut</option>
                    <option>Color &amp; Highlights</option>
                    <option>Treatment</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label className="form-label">Preferred date &amp; time</label>
                  <input className="form-control" type="datetime-local" />
                </div>
                <button className="btn btn-accent">Request Booking</button>
              </form>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="panel">
              <h5>Visit Us</h5>
              <p className="small mb-1">
                <strong>Address:</strong> 11 Velvet Lane, City Centre
              </p>
              <p className="small mb-1">
                <strong>Phone:</strong> +91 98765 43210
              </p>
              <p className="small mb-0">
                <strong>Hours:</strong> Tue–Sun 10:00–8:00
              </p>
              <div className="ratio ratio-16x9 mt-3">
                <iframe
                  src="https://www.google.com/maps?q=mumbai&output=embed"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* FOOTER */}
    <footer className="text-center">
      <div className="container">
        <small>
          © <span id="yr" /> Salon Lumière — All rights reserved • Follow us
          @salonlumiere
        </small>
      </div>
    </footer>
  </>
  )

}

root.render(<Dance />);


