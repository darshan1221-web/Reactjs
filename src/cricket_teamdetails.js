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
           
    <div className="col-md-6 col-lg-4 mb-3">
      {/* Team Card */}
      <div className="card shadow text-center  w-100 h-100">
        {/* Team Name */}
        <div className="card-header bg-primary text-white">
          <h4 className="mb-0 fw-bold">{this.name}</h4>
        </div>
        {/* Logo */}
        <div className="card-body">
          <img src={this.logo} alt="Team Logo" className="img-fluid mb-4" width={120} />
          {/* Captain */}
          <div className="d-flex align-items-center mb-3 text-start">
            <i className="bi bi-person-fill fs-4 text-primary me-3" />
            <div>
              <strong>Captain</strong><br />
              {this.captain}
            </div>
          </div>
          {/* Home Ground */}
          <div className="d-flex align-items-center mb-3 text-start">
            <i className="bi bi-geo-alt-fill fs-4 text-primary me-3" />
            <div>
              <strong>Home Ground</strong><br />
              {this.homeGround}
            </div>
          </div>
          {/* Trophies */}
          <div className="d-flex align-items-start text-start">
            <i className="bi bi-trophy-fill fs-4 text-primary me-3" />
            <div>
              <strong>Trophies</strong>
              <div> {this.trophies} </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Card */}
    </div>
  

        )
    }
}

function Team(){
const NewiplTeams = [
  {
    team: "Chennai Super Kings",
    trophies: 5,
    captain: "MS Dhoni",
    homeGround: "MA Chidambaram Stadium, Chennai",
    logo: "https://upload.wikimedia.org/wikipedia/en/2/2b/Chennai_Super_Kings_Logo.svg"
  },
  {
    team: "Mumbai Indians",
    trophies: 5,
    captain: "Hardik Pandya",
    homeGround: "Wankhede Stadium, Mumbai",
    logo: "https://upload.wikimedia.org/wikipedia/en/c/cd/Mumbai_Indians_Logo.svg"
  },
  {
    team: "Kolkata Knight Riders",
    trophies: 2,
    captain: "Shreyas Iyer",
    homeGround: "Eden Gardens, Kolkata",
    logo: "https://upload.wikimedia.org/wikipedia/en/4/4c/Kolkata_Knight_Riders_Logo.svg"
  },
  {
    team: "Royal Challengers Bengaluru",
    trophies: 0,
    captain: "Faf du Plessis",
    homeGround: "M Chinnaswamy Stadium, Bengaluru",
    logo: "https://upload.wikimedia.org/wikipedia/en/d/d4/Royal_Challengers_Bangalore_Logo.svg"
  },
  {
    team: "Rajasthan Royals",
    trophies: 1,
    captain: "Sanju Samson",
    homeGround: "Sawai Mansingh Stadium, Jaipur",
    logo: "https://upload.wikimedia.org/wikipedia/en/6/60/Rajasthan_Royals_Logo.svg"
  },
  {
    team: "Sunrisers Hyderabad",
    trophies: 1,
    captain: "Pat Cummins",
    homeGround: "Rajiv Gandhi International Stadium, Hyderabad",
    logo: "https://upload.wikimedia.org/wikipedia/en/8/81/Sunrisers_Hyderabad.svg"
  },
  {
    team: "Delhi Capitals",
    trophies: 0,
    captain: "Rishabh Pant",
    homeGround: "Arun Jaitley Stadium, Delhi",
    logo: "https://upload.wikimedia.org/wikipedia/en/2/2f/Delhi_Capitals.svg"
  },
  {
    team: "Punjab Kings",
    trophies: 0,
    captain: "Shikhar Dhawan",
    homeGround: "IS Bindra Stadium, Mohali",
    logo: "https://upload.wikimedia.org/wikipedia/en/d/d4/Punjab_Kings_Logo.svg"
  },
  {
    team: "Lucknow Super Giants",
    trophies: 0,
    captain: "KL Rahul",
    homeGround: "BRSABV Ekana Cricket Stadium, Lucknow",
    logo: "https://upload.wikimedia.org/wikipedia/en/5/5d/Lucknow_Super_Giants_logo.svg"
  },
  {
    team: "Gujarat Titans",
    trophies: 1,
    captain: "Shubman Gill",
    homeGround: "Narendra Modi Stadium, Ahmedabad",
    logo: "https://upload.wikimedia.org/wikipedia/en/0/09/Gujarat_Titans_Logo.svg"
  }
];
return (
        <div className="container my-5">
  <div className="row justify-content-center">

{
NewiplTeams.map((team, index) => 
 {
    return <Teamdetails 
    name={team.team} 
    captain={team.captain} 
    homeGround={team.homeGround} 
    trophies={team.trophies} 
    logo={team.logo} 
    index={index} />
})
}
</div>
</div>)
}

root.render(<Team />)