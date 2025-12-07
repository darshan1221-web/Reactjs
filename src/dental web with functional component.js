import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
function Navbar(){
    return( <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
    <div className="container">
      <a className="navbar-brand fw-bold" href="#home">
        SmileWorks Dental
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navmenu"
        aria-controls="navmenu"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navmenu">
        <ul className="navbar-nav ms-auto align-items-lg-center">
          <li className="nav-item"><a className="nav-link" href="#home">Home</a></li>
          <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
          <li className="nav-item"><a className="nav-link" href="#services">Services</a></li>
          <li className="nav-item"><a className="nav-link" href="#team">Team</a></li>
          <li className="nav-item"><a className="nav-link" href="#reviews">Reviews</a></li>
          <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
          <li className="nav-item ms-2">
            <a className="btn btn-outline-light" href="#contact">Book Appointment</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>)
}

function Hero(){
    return(<header id="home" className="hero py-5 ">
    <div className="container py-5">
      <div className="row align-items-center">
        <div className="col-lg-6 text-white">
          <h1 className="display-5 fw-bold">Gentle care. Confident smiles.</h1>
          <p className="lead">
            Comprehensive dental care for the whole family — preventative,
            restorative and cosmetic dentistry in a calm, modern clinic.
          </p>
          <div className="d-flex gap-2">
            <a className="btn btn-light btn-lg" href="#services">Our Services</a>
            <a className="btn btn-outline-light btn-lg" href="#contact">Book Appointment</a>
          </div>
          <ul className="list-unstyled mt-4 small">
            <li>• Experienced dentists &amp; hygienists</li>
            <li>• Pain-minimizing techniques</li>
            <li>• Financing &amp; insurance accepted</li>
          </ul>
        </div>

        <div className="col-lg-6 text-center mt-4 mt-lg-0">
          <div className="ratio ratio-4x3 rounded overflow-hidden shadow-lg" style={{ maxWidth: 520, marginInline: "auto" }}>
            <img
              src="https://images.unsplash.com/photo-1576765607921-6a6f6e92d6a4?auto=format&fit=crop&w=1200&q=80"
              alt="dentist caring for patient"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
  </header>)
}

function About(){
    return( <section id="about" className="py-5">
    <div className="container">
      <div className="row g-4 align-items-center">
        <div className="col-md-6">
          <h2>About SmileWorks</h2>
          <p>
            At SmileWorks we combine modern dentistry with compassionate
            service. Our clinic uses up-to-date technology (digital X-rays,
            intraoral cameras, painless injections) to deliver efficient and
            comfortable care.
          </p>
          <p className="mb-0">
            We emphasize prevention and patient education so you can keep your
            smile healthy for life.
          </p>
        </div>

        <div className="col-md-6">
          <div className="row g-3">
            <div className="col-sm-6">
              <div className="card p-3 h-100 card-hover">
                <div className="hstack gap-3 align-items-start">
                  <div className="service-icon text-primary">🦷</div>
                  <div>
                    <h6 className="mb-1">Preventive Care</h6>
                    <p className="mb-0 small text-muted">Cleanings, exams &amp; fluoride.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6">
              <div className="card p-3 h-100 card-hover">
                <div className="hstack gap-3 align-items-start">
                  <div className="service-icon text-success">🪥</div>
                  <div>
                    <h6 className="mb-1">Restorations</h6>
                    <p className="mb-0 small text-muted">Fillings, crowns &amp; bridges.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6">
              <div className="card p-3 h-100 card-hover">
                <div className="hstack gap-3 align-items-start">
                  <div className="service-icon text-warning">✨</div>
                  <div>
                    <h6 className="mb-1">Cosmetic Dentistry</h6>
                    <p className="mb-0 small text-muted">Veneers, whitening &amp; smile design.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6">
              <div className="card p-3 h-100 card-hover">
                <div className="hstack gap-3 align-items-start">
                  <div className="service-icon text-danger">🩺</div>
                  <div>
                    <h6 className="mb-1">Emergency Care</h6>
                    <p className="mb-0 small text-muted">Same-day urgent appointments.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </section>)
}


function Servicesname(props){
  let {name,description}= props;
  return(
     <div className="col-md-4">
          <div className="card h-100 card-hover">
            <img src="https://images.unsplash.com/photo-1588776814546-1b9dd1d8a3a7" className="card-img-top" alt="teeth cleaning" />
            <div className="card-body">
              <h5 className="card-title">{name}s</h5>
              <p className="card-text small text-muted">{description}</p>
            </div>
            <div className="card-footer bg-transparent">
              <a href="#contact" className="btn btn-outline-primary btn-sm">Book Cleaning</a>
            </div>
          </div>
        </div>
  )
}
function Services(){
    return(<section id="services" className="py-5 bg-light">
    <div className="container">
      <h2 className="mb-4">Services</h2>
      <div className="row g-4">
       
< Servicesname name="Teeth Cleaning" description="Professional cleanings to keep your smile healthy and bright."/>
< Servicesname name="Fillings &amp; Restorations" description="Durable, natural-looking fillings and crowns to restore damaged teeth."/>
< Servicesname name="Teeth Whitening" description="Safe, effective whitening treatments for a radiant smile."/>
< Servicesname name="Veneers" description="Custom porcelain veneers to enhance the appearance of your teeth."/>
< Servicesname name="Root Canals" description="Gentle root canal therapy to relieve pain and save infected teeth."/>
< Servicesname name="Emergency Dental Care" description="Same-day appointments for dental emergencies and urgent care."/>
       
      </div>
    </div>
  </section>)
}

function Team(){
    return(<section id="team" className="py-5">
    <div className="container">
      <h2 className="mb-4">Meet Our Team</h2>
      <div className="row g-4">
        <div className="col-md-4">
          <div className="card h-100 text-center card-hover">
            <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2" className="card-img-top doctor-img" alt="Dr. Priya Patel" />
            <div className="card-body">
              <h5 className="card-title mb-0">Dr. Priya Patel</h5>
              <small className="text-muted">BDS, Cosmetic &amp; Restorative Dentist</small>
              <p className="mt-2 small text-muted">10+ years experience creating healthy beautiful smiles.</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100 text-center card-hover">
            <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d" className="card-img-top doctor-img" alt="Dr. Rohit Mehra" />
            <div className="card-body">
              <h5 className="card-title mb-0">Dr. Rohit Mehra</h5>
              <small className="text-muted">BDS, Endodontist</small>
              <p className="mt-2 small text-muted">Specialist in root canals and pain-free procedures.</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100 text-center card-hover">
            <img src="https://images.unsplash.com/photo-1544725122-9cc7a0f1c1f4" className="card-img-top doctor-img" alt="Hygienist" />
            <div className="card-body">
              <h5 className="card-title mb-0">Anita — Dental Hygienist</h5>
              <small className="text-muted">Registered Hygienist</small>
              <p className="mt-2 small text-muted">Friendly cleanings and oral health guidance.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)
}
function Clientreviwes(props){
  let {review, name}= props;
  return(<div className="col-md-4">
          <div className="card p-3 h-100 card-hover">
            <blockquote className="blockquote mb-0">
              <p className="small">{review}</p>
              <footer className="blockquote-footer small mt-2">{name}</footer>
            </blockquote>
          </div>
        </div>)
}
function Reviews(){
    return(
         <section id="reviews" className="py-5 bg-light">
    <div className="container">
      <h2 className="mb-4">Patient Reviews</h2>
      <div className="row g-4">
       < Clientreviwes review="SmileWorks changed my life! Dr. Patel gave me the confidence to smile again with beautiful veneers." name="— Aisha K."/>
       < Clientreviwes review="I was nervous about my root canal, but Dr. Mehra made it painless and easy. Highly recommend!" name="— Raj S."/>
       < Clientreviwes review="The hygienist Anita is so gentle and thorough. My teeth have never felt cleaner!" name="— Neha M."/> 
       < Clientreviwes review="The hygienist Anita is so gentle and thorough. My teeth have never felt cleaner!" name="— Neha M."/> 
       < Clientreviwes review="The hygienist Anita is so gentle and thorough. My teeth have never felt cleaner!" name="— Neha M."/> 
       < Clientreviwes review="The hygienist Anita is so gentle and thorough. My teeth have never felt cleaner!" name="— Neha M."/> 
      


      </div>
    </div>
  </section>
    )
}
function Contact(){
    return(
        <section id="contact" className="py-5">
    <div className="container">
      <h2 className="mb-4">Contact &amp; Book Appointment</h2>
      <div className="row g-4">
        <div className="col-lg-6">
          {/* Frontend-only form with Bootstrap validation */}
          <form id="contactForm" className="needs-validation" noValidate>
            <div id="formAlert" />
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Full name</label>
              <input id="name" name="name" type="text" className="form-control" required />
              <div className="invalid-feedback">Please enter your name.</div>
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input id="email" name="email" type="email" className="form-control" required />
              <div className="invalid-feedback">Please enter a valid email address.</div>
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">Phone</label>
              <input id="phone" name="phone" type="tel" className="form-control" required />
              <div className="invalid-feedback">Please enter a contact number.</div>
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Reason for visit</label>
              <textarea id="message" name="message" rows={4} className="form-control" defaultValue={""} />
            </div>
            <button className="btn btn-primary" type="submit">Request Appointment</button>
          </form>
          {/* End form */}
        </div>

        <div className="col-lg-6">
          <div className="card p-3 shadow-sm">
            <h5 className="card-title">Clinic Info</h5>
            <p className="mb-1 small"><strong>Address:</strong> 22 Pearl Street, Dental Plaza, Mumbai</p>
            <p className="mb-1 small"><strong>Phone:</strong> +91 22 1234 5678</p>
            <p className="mb-1 small"><strong>Hours:</strong> Mon–Fri 9:00–6:00, Sat 9:00–2:00</p>
            <div className="ratio ratio-16x9 mt-3">
              <iframe src="https://www.google.com/maps?q=mumbai&output=embed" title="clinic map" style={{ border: 0 }} allowFullScreen />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    )
}
function Footer(){
    return(<footer className="bg-dark text-light py-4">
    <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
      <div>
        <strong>SmileWorks Dental</strong>
        <div className="small">© <span id="year" /> SmileWorks — All rights reserved</div>
      </div>
      <div className="mt-3 mt-md-0 small">
        Follow:
        <a href="#" className="ms-2">Instagram</a> |
        <a href="#" className="ms-2">Facebook</a> |
        <a href="#" className="ms-2">Google</a>
      </div>
    </div>
  </footer>)
}
function Dance() {
    return (<>
  <style>{`
    /* full-page gradient background */
    html, body, #root {
      height: 100%;
    }
       .navbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: var(--nav-h);
    z-index: 1040;                 /* above normal content and Bootstrap elements */
    display: flex;                 /* keep height consistent with contents */
    align-items: center;
    background-color: rgba(13,110,253,0.06); /* subtle translucent bg so gradient shows through */
    backdrop-filter: blur(4px);    /* optional: modern blurred backdrop */
    -webkit-backdrop-filter: blur(4px);
  }
    body {
      margin: 0;
      min-height: 100%;
      background: linear-gradient(120deg, #0d6efd 0%, #6610f2 60%);
      background-attachment: fixed;
      color: #212529;
    }

    /* hero keeps a stronger white-on-gradient look */
    .hero {
      background: linear-gradient(120deg, rgba(13,110,253,0.95) 0%, rgba(102,16,242,0.95) 60%);
      color: #fff;
    }

    /* subtle card hover */
    .card-hover:hover {
      transform: translateY(-6px);
      box-shadow: 0 1rem 2rem rgba(0,0,0,0.12);
      transition: .25s;
    }

    .service-icon {
      font-size: 2rem;
      line-height: 1;
    }

    .doctor-img {
      object-fit: cover;
      height: 220px;
    }

    footer a {
      color: rgba(255,255,255,.9);
      text-decoration: none;
    }

    /* ensure light-bg sections remain readable over gradient */
    .bg-light {
      background-color: #f8f9fa !important;
    }

    /* make containers slightly translucent on mobile if you prefer (optional)
       .container, .container-fluid { background: rgba(255,255,255,0.02); }
    */
  `}</style>

  {/* NAVBAR */}
 <Navbar/>

  {/* HERO */}
  <Hero/>

  {/* ABOUT */}
 <About/>

  {/* SERVICES */}
  <Services/>

  {/* TEAM */}
  <Team/>
  {/* REVIEWS */}
 <Reviews/>

  {/* CONTACT */}
  <Contact/>

  {/* FOOTER */}
  <Footer/>
</>
)

}

root.render(<Dance />);


