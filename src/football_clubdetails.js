import ReactDOM from 'react-dom/client';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
class Teamdetails extends React.Component {
  constructor(props) {
    super(props);
    this.name= props.name;
    this.captain= props.captain;
    this.homeGround= props.homeGround;
    this.trophies= props.trophies;
    this.logo= props.logo;
    this.index= props.index;
  }
  render() {
    return (
       <div className="col-md-6 col-lg-4 d-flex my-3">
      {/* Football Club Card */}
      <div className="card shadow-lg w-100 h-100">
        {/* Header */}
        <div className="card-header bg-dark text-white text-center">
          <h4 className="mb-0 fw-bold">{this.name}</h4>
          <small className="text-warning">Football Club</small>
        </div>
        {/* Body */}
        <div className="card-body d-flex">
          {/* Logo */}
          <div className="me-3 text-center">
            <img src={this.logo} alt="Club Logo" className="img-fluid rounded" width={90} />
          </div>
          {/* Details */}
          <div className="flex-grow-1">
            <div className="mb-2">
              <span className="badge bg-primary me-2">
                <i className="bi bi-person-fill" /> Captain
              </span>
              <span className="fw-semibold">{this.captain}</span>
            </div>
            <div className="mb-2">
              <span className="badge bg-success me-2">
                <i className="bi bi-geo-alt-fill" /> Home Ground
              </span>
              <span>{this.homeGround}</span>
            </div>
            <div className="mb-2">
              <span className="badge bg-warning text-dark me-2">
                <i className="bi bi-trophy-fill" /> Trophies
              </span>
              <span className="fw-bold">{this.trophies}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}
const FootballClubs = [
  {
    club: "Real Madrid",
    trophies: 14,
    captain: "Nacho Fernández",
    homeGround: "Santiago Bernabéu Stadium",
    logo: "https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg"
  },
  {
    club: "FC Barcelona",
    trophies: 5,
    captain: "Ronald Araújo",
    homeGround: "Spotify Camp Nou",
    logo: "https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg"
  },
  {
    club: "Manchester United",
    trophies: 3,
    captain: "Bruno Fernandes",
    homeGround: "Old Trafford",
    logo: "https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg"
  },
  {
    club: "Liverpool",
    trophies: 6,
    captain: "Virgil van Dijk",
    homeGround: "Anfield",
    logo: "https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC.svg"
  },
  {
    club: "Bayern Munich",
    trophies: 6,
    captain: "Manuel Neuer",
    homeGround: "Allianz Arena",
    logo: "https://upload.wikimedia.org/wikipedia/en/1/1f/FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg"
  },
  {
    club: "AC Milan",
    trophies: 7,
    captain: "Davide Calabria",
    homeGround: "San Siro",
    logo: "https://upload.wikimedia.org/wikipedia/en/d/d0/AC_Milan.svg"
  },
  {
    club: "Chelsea",
    trophies: 2,
    captain: "Reece James",
    homeGround: "Stamford Bridge",
    logo: "https://upload.wikimedia.org/wikipedia/en/c/cc/Chelsea_FC.svg"
  },
  {
    club: "Manchester City",
    trophies: 1,
    captain: "Kyle Walker",
    homeGround: "Etihad Stadium",
    logo: "https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg"
  },
  {
    club: "Juventus",
    trophies: 2,
    captain: "Danilo",
    homeGround: "Allianz Stadium",
    logo: "https://upload.wikimedia.org/wikipedia/en/d/da/Juventus_FC_2017_logo.svg"
  },
  {
    club: "Paris Saint-Germain",
    trophies: 0,
    captain: "Marquinhos",
    homeGround: "Parc des Princes",
    logo: "https://upload.wikimedia.org/wikipedia/en/a/a7/Paris_Saint-Germain_F.C..svg"
  }
];

function Football(){
  return(
    <div className="container">
  <div className="row justify-content-center">
     {
      FootballClubs.map((item, index) => {
        return <Teamdetails 
        name={item.club} 
        captain={item.captain} 
        homeGround={item.homeGround} 
        trophies={item.trophies} 
        logo={item.logo} 
        index={index} />
      })
     }
  </div>
</div>

  )
}
root.render(<Football />)