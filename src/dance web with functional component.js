import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
function Navbar() {
  return (<nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
    <div className="container">
      <a className="navbar-brand fw-bold" href="#home">RhythmFlow Dance</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navmenu">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item"><a className="nav-link" href="#home">Home</a></li>
          <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
          <li className="nav-item"><a className="nav-link" href="#classes">Classes</a></li>
          <li className="nav-item"><a className="nav-link" href="#instructors">Instructors</a></li>
          <li className="nav-item"><a className="nav-link" href="#pricing">Pricing</a></li>
          <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
        </ul>
      </div>
    </div>
  </nav>)
}

function Hero() {
  return (
    <header id="home" className="bg-dark text-light py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h1 className="display-5 fw-bold">Move. Connect. Shine.</h1>
            <p className="lead">
              RhythmFlow Dance offers energetic, fun and professional dance classes for all ages and levels.
            </p>

            <div className="d-flex gap-2">
              <a href="#classes" className="btn btn-primary btn-lg">View Classes</a>
              <a href="#contact" className="btn btn-outline-light btn-lg">Book a Trial</a>
            </div>
          </div>

          <div className="col-md-6 text-center mt-4 mt-md-0">
            <div className="ratio ratio-4x3 rounded overflow-hidden shadow" style={{ maxWidth: 520 }}>
              <img
                src="https://images.unsplash.com/photo-1518459031867-a89b944bffe0"
                alt="dancers"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </header>

  )
}

function Aboutus() {
  return (
    <section id="about" className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h2>About RhythmFlow</h2>
            <p>We believe dance is for everybody. Our mission is to build confidence, fitness and artistic expression.</p>
            <p>We offer hip-hop, contemporary, ballet basics, salsa and more.</p>
          </div>

          <div className="col-lg-6">
            <div className="row g-3">
              <div className="col-sm-6">
                <div className="card h-100">
                  <div className="card-body">
                    <h5 className="card-title">All Levels</h5>
                    <p className="card-text small">Kids, teens & adults — beginners welcome.</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="card h-100">
                  <div className="card-body">
                    <h5 className="card-title">Flexible Timings</h5>
                    <p className="card-text small">Morning & evening batches available.</p>
                  </div>
                </div>
              </div>

              <div className="col-sm-6">
                <div className="card h-100">
                  <div className="card-body">
                    <h5 className="card-title">Performance Team</h5>
                    <p className="card-text small">Opportunities to perform on stage.</p>
                  </div>
                </div>
              </div>

              <div className="col-sm-6">
                <div className="card h-100">
                  <div className="card-body">
                    <h5 className="card-title">Safe Studio</h5>
                    <p className="card-text small">Professional flooring & ventilation.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
function Classestype(props) {
  let { classname, schedule } = props;
  return (<div className="col-md-4">
    <div className="card h-100 shadow-sm">
      <img src="https://images.unsplash.com/photo-1520975911006-6c5d7d6e8b3d" className="card-img-top" alt="hiphop" />
      <div className="card-body">
        <h5 className="card-title">{classname}</h5>
        <p className="card-text small">{schedule}</p>
      </div>
    </div>
  </div>)
}
function Classes() {
  return (
    <section id="classes" className="py-5 bg-light">
      <div className="container">
        <h2 className="mb-4">Classes & Schedule</h2>
        <div className="row gy-3">
          < Classestype classname="Hip-Hop Basics" schedule="Mon & Wed: 6pm - 7pm" />
          < Classestype classname="Contemporary Flow" schedule="Tue & Thu: 7pm - 8pm" />
          < Classestype classname="Salsa Moves" schedule="Sat: 4pm - 5pm" />
          < Classestype classname="Hip-Hop Basics" schedule="Mon & Wed: 6pm - 7pm" />
          < Classestype classname="Contemporary Flow" schedule="Tue & Thu: 7pm - 8pm" />
          < Classestype classname="Salsa Moves" schedule="Sat: 4pm - 5pm" />

        </div>
      </div>
    </section>
  )
}

function Instructors() {
  return (<section id="instructors" className="py-5">
    <div className="container">
      <h2 className="mb-4">Meet Our Instructors</h2>
      <div className="row g-4">
        <div className="col-md-4">
          <div className="card h-100 text-center">
            <img src="https://images.unsplash.com/photo-1507537297725-24a1c029d3ca" className="card-img-top" alt="instr" />
            <div className="card-body">
              <h5 className="card-title">Asha Kapoor</h5>
              <p className="small">Contemporary & Ballet</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100 text-center">
            <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2" className="card-img-top" alt="instr" />
            <div className="card-body">
              <h5 className="card-title">Ravi Desai</h5>
              <p className="small">Hip-Hop & Choreo</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100 text-center">
            <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9" className="card-img-top" alt="instr" />
            <div className="card-body">
              <h5 className="card-title">Maya Singh</h5>
              <p className="small">Salsa & Latin</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>)
}
function Pricetype(props) {
  let { plan, price } = props;
  return (<div className="col-md-4">
    <div className="card h-100 text-center border-primary">
      <div className="card-body">
        <h5 className="card-title">{plan}</h5>
        <p className="display-6 fw-bold">{price}</p>
      </div>
    </div>
  </div>)
}
function Pricing() {
  return (<section id="pricing" className="py-5 bg-light">
    <div className="container">
      <h2 className="mb-4">Pricing</h2>
      <div className="row gy-3">

< Pricetype plan="Drop-In" price="₹500" />
< Pricetype plan="Monthly" price="₹4000" />
< Pricetype plan="Quarterly" price="₹11000" />
< Pricetype plan="Quarterly" price="₹11000" />
< Pricetype plan="Quarterly" price="₹11000" />
< Pricetype plan="Quarterly" price="₹11000" />

      </div>
    </div>
  </section>)
}

function Contact() {
  return (<section id="contact" className="py-5">
    <div className="container">
      <h2 className="mb-4">Contact & Book Trial</h2>
      <div className="row">
        <div className="col-md-6">
          <form>
            <div class="mb-3">
              <label class="form-label">Full Name</label>
              <input name="name" class="form-control" required />
            </div>

            <div class="mb-3">
              <label class="form-label">Email</label>
              <input type="email" name="email" class="form-control" required />
            </div>

            <div class="mb-3">
              <label class="form-label">Message</label>
              <textarea name="message" class="form-control" rows="4"></textarea>
            </div>

            <button class="btn btn-primary" type="submit">
              Send Message
            </button>
          </form>

        </div>

        <div className="col-md-6 mt-4 mt-md-0">
          <div className="card p-3 shadow-sm">
            <h5 className="card-title">Studio Location</h5>
            <p className="small">123 Rhythm Street, Mumbai</p>
            <div className="ratio ratio-16x9">
              <iframe src="https://www.google.com/maps?q=mumbai&output=embed" title="map" style={{ border: 0 }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>)
}

function Footer() {
  return (<footer className="bg-dark text-light py-4 text-center">
    <div className="container">
      © {new Date().getFullYear()} RhythmFlow Dance — All rights reserved
    </div>
  </footer>)
}

function Dance() {
  return (<>
    {/* HOVER EFFECTS */}
    <style>{`
        
        navbar {
            box-shadow: 0 0.5rem 1rem rgba(0,0,0,0.1);
             }
        .card:hover {
            transform: scale(1.03);
            transition: 0.3s ease;
            box-shadow: 0 1rem 2rem rgba(0,0,0,0.15);
        }
        .btn:hover {
            opacity: 0.85;
            transition: 0.2s ease;
        }
        .navbar-brand:hover {
            opacity: 0.8;
            transition: 0.2s ease;
        }
    `}</style>

    {/* NAVBAR */}
    <Navbar />

    {/* HERO */}
    <Hero />
    {/* ABOUT */}
    <Aboutus />

    {/* CLASSES */}
    <Classes />

    {/* INSTRUCTORS */}
    <Instructors />

    {/* PRICING */}
    <Pricing />

    {/* CONTACT */}
    <Contact />

    {/* FOOTER */}
    <Footer />
  </>)

}

root.render(<Dance />);


