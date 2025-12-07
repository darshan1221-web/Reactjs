import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));

function Resume(){
return(
<><div className="container my-5">
  <h1 className="text-center mb-4">
    T20 World Cup 2026 — Complete Match Schedule
  </h1>
  <div className="table-responsive">
    <table className="table table-bordered table-striped table-hover text-light">
      <thead className="table-dark">
        <tr>
          <th>Date</th>
          <th>Time</th>
          <th>Team 1</th>
          <th>Team 2</th>
          <th>Venue</th>
        </tr>
      </thead>
      <tbody>
        {/* Fixtures */}
        <tr>
          <td>07 Feb 2026</td>
          <td>11:00 AM</td>
          <td>PAK</td>
          <td>NED</td>
          <td>SSC, Colombo</td>
        </tr>
        <tr>
          <td>07 Feb 2026</td>
          <td>3:00 PM</td>
          <td>WI</td>
          <td>BAN</td>
          <td>Kolkata</td>
        </tr>
        <tr>
          <td>07 Feb 2026</td>
          <td>7:00 PM</td>
          <td>IND</td>
          <td>USA</td>
          <td>Mumbai</td>
        </tr>
        <tr>
          <td>08 Feb 2026</td>
          <td>11:00 AM</td>
          <td>NZ</td>
          <td>AFG</td>
          <td>Chennai</td>
        </tr>
        <tr>
          <td>08 Feb 2026</td>
          <td>3:00 PM</td>
          <td>ENG</td>
          <td>NEP</td>
          <td>Mumbai</td>
        </tr>
        <tr>
          <td>08 Feb 2026</td>
          <td>7:00 PM</td>
          <td>SL</td>
          <td>IRE</td>
          <td>Premadasa, Colombo</td>
        </tr>
        <tr>
          <td>09 Feb 2026</td>
          <td>11:00 AM</td>
          <td>BAN</td>
          <td>ITA</td>
          <td>Kolkata</td>
        </tr>
        <tr>
          <td>09 Feb 2026</td>
          <td>3:00 PM</td>
          <td>ZIM</td>
          <td>OMA</td>
          <td>SSC, Colombo</td>
        </tr>
        <tr>
          <td>09 Feb 2026</td>
          <td>7:00 PM</td>
          <td>SA</td>
          <td>CAN</td>
          <td>Ahmedabad</td>
        </tr>
        <tr>
          <td>10 Feb 2026</td>
          <td>11:00 AM</td>
          <td>NED</td>
          <td>NAM</td>
          <td>Delhi</td>
        </tr>
        <tr>
          <td>10 Feb 2026</td>
          <td>3:00 PM</td>
          <td>NZ</td>
          <td>UAE</td>
          <td>Chennai</td>
        </tr>
        <tr>
          <td>10 Feb 2026</td>
          <td>7:00 PM</td>
          <td>PAK</td>
          <td>USA</td>
          <td>SSC, Colombo</td>
        </tr>
        <tr>
          <td>11 Feb 2026</td>
          <td>11:00 AM</td>
          <td>SA</td>
          <td>AFG</td>
          <td>Ahmedabad</td>
        </tr>
        <tr>
          <td>11 Feb 2026</td>
          <td>3:00 PM</td>
          <td>AUS</td>
          <td>IRE</td>
          <td>Premadasa, Colombo</td>
        </tr>
        <tr>
          <td>11 Feb 2026</td>
          <td>7:00 PM</td>
          <td>ENG</td>
          <td>WI</td>
          <td>Mumbai</td>
        </tr>
        <tr>
          <td>12 Feb 2026</td>
          <td>11:00 AM</td>
          <td>SL</td>
          <td>OMA</td>
          <td>Kandy</td>
        </tr>
        <tr>
          <td>12 Feb 2026</td>
          <td>3:00 PM</td>
          <td>NEP</td>
          <td>ITA</td>
          <td>Mumbai</td>
        </tr>
        <tr>
          <td>12 Feb 2026</td>
          <td>7:00 PM</td>
          <td>IND</td>
          <td>NAM</td>
          <td>Delhi</td>
        </tr>
        <tr>
          <td>13 Feb 2026</td>
          <td>11:00 AM</td>
          <td>AUS</td>
          <td>ZIM</td>
          <td>Premadasa, Colombo</td>
        </tr>
        <tr>
          <td>13 Feb 2026</td>
          <td>3:00 PM</td>
          <td>CAN</td>
          <td>UAE</td>
          <td>Delhi</td>
        </tr>
        <tr>
          <td>13 Feb 2026</td>
          <td>7:00 PM</td>
          <td>USA</td>
          <td>NED</td>
          <td>Chennai</td>
        </tr>
        <tr>
          <td>14 Feb 2026</td>
          <td>11:00 AM</td>
          <td>IRE</td>
          <td>OMA</td>
          <td>SSC, Colombo</td>
        </tr>
        <tr>
          <td>14 Feb 2026</td>
          <td>3:00 PM</td>
          <td>ENG</td>
          <td>BAN</td>
          <td>Kolkata</td>
        </tr>
        <tr>
          <td>14 Feb 2026</td>
          <td>7:00 PM</td>
          <td>NZ</td>
          <td>SA</td>
          <td>Ahmedabad</td>
        </tr>
        <tr>
          <td>15 Feb 2026</td>
          <td>11:00 AM</td>
          <td>WI</td>
          <td>NEP</td>
          <td>Mumbai</td>
        </tr>
        <tr>
          <td>15 Feb 2026</td>
          <td>3:00 PM</td>
          <td>USA</td>
          <td>NAM</td>
          <td>Chennai</td>
        </tr>
        <tr>
          <td>15 Feb 2026</td>
          <td>7:00 PM</td>
          <td>IND</td>
          <td>PAK</td>
          <td>Premadasa, Colombo</td>
        </tr>
        <tr>
          <td>16 Feb 2026</td>
          <td>11:00 AM</td>
          <td>AFG</td>
          <td>UAE</td>
          <td>Delhi</td>
        </tr>
        <tr>
          <td>16 Feb 2026</td>
          <td>3:00 PM</td>
          <td>ENG</td>
          <td>ITA</td>
          <td>Kolkata</td>
        </tr>
        <tr>
          <td>16 Feb 2026</td>
          <td>7:00 PM</td>
          <td>AUS</td>
          <td>SL</td>
          <td>Kandy</td>
        </tr>
        <tr>
          <td>17 Feb 2026</td>
          <td>11:00 AM</td>
          <td>NZ</td>
          <td>CAN</td>
          <td>Chennai</td>
        </tr>
        <tr>
          <td>17 Feb 2026</td>
          <td>3:00 PM</td>
          <td>IRE</td>
          <td>ZIM</td>
          <td>Kandy</td>
        </tr>
        <tr>
          <td>17 Feb 2026</td>
          <td>7:00 PM</td>
          <td>BAN</td>
          <td>NEP</td>
          <td>Mumbai</td>
        </tr>
        <tr>
          <td>18 Feb 2026</td>
          <td>11:00 AM</td>
          <td>SA</td>
          <td>UAE</td>
          <td>Delhi</td>
        </tr>
        <tr>
          <td>18 Feb 2026</td>
          <td>3:00 PM</td>
          <td>PAK</td>
          <td>NAM</td>
          <td>SSC, Colombo</td>
        </tr>
        <tr>
          <td>18 Feb 2026</td>
          <td>7:00 PM</td>
          <td>IND</td>
          <td>NED</td>
          <td>Ahmedabad</td>
        </tr>
        <tr>
          <td>19 Feb 2026</td>
          <td>11:00 AM</td>
          <td>WI</td>
          <td>ITA</td>
          <td>Kolkata</td>
        </tr>
        <tr>
          <td>19 Feb 2026</td>
          <td>3:00 PM</td>
          <td>SL</td>
          <td>ZIM</td>
          <td>Premadasa, Colombo</td>
        </tr>
        <tr>
          <td>19 Feb 2026</td>
          <td>7:00 PM</td>
          <td>AFG</td>
          <td>CAN</td>
          <td>Chennai</td>
        </tr>
        <tr>
          <td>20 Feb 2026</td>
          <td>7:00 PM</td>
          <td>AUS</td>
          <td>OMA</td>
          <td>Kandy</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

</>)

}

root.render(<Resume />);


