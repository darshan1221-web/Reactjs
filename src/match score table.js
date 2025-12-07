import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
class Matchscore extends React.Component {
  render(){
    return(
       <div className=" col">
      <div className="card">
        <div className="card-header">
          {/* Match Title */}
          <h4 className="fw-bold">Australia vs England, 2nd Test - Live Cricket Score, Commentary</h4>
        </div>
        <div className="card-body">
          {/* Additional Info */}
          <div className="small text-secondary mb-3 d-flex justify-content-between">
            <div><strong>Series:</strong> The Ashes, 2025-26</div>
            <div><strong>Venue:</strong> The Gabba, Brisbane</div>
            <div><strong>Date &amp; Time:</strong> Thu, Dec 4, 2:00 PM LOCAL</div>
          </div>
        </div>
      </div>
      {/* Score Summary */}
      <div className="text-secondary mb-1">ENG 334</div>
      <div className="fs-4 fw-bold">
        AUS 288/3 (54.2)
        <span className="fs-6 text-secondary">CRR: 5.3</span>
      </div>
      <div className="fw-semibold text-danger mb-3">
        Day 2: 3rd Session - Australia trail by 46 runs
      </div>
      {/* Score Table */}
      <div className="table-responsive">
        <table className="table table-sm">
          <thead className="text-secondary">
            <tr>
              <th>Batter</th>
              <th className="text-center">R</th>
              <th className="text-center">B</th>
              <th className="text-center">4s</th>
              <th className="text-center">6s</th>
              <th className="text-center">SR</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="fw-semibold text-primary">Cameron Green *</td>
              <td className="text-center">43</td>
              <td className="text-center">51</td>
              <td className="text-center">7</td>
              <td className="text-center">0</td>
              <td className="text-center">84.31</td>
            </tr>
            <tr>
              <td className="fw-semibold text-primary">Steven Smith</td>
              <td className="text-center">61</td>
              <td className="text-center">79</td>
              <td className="text-center">5</td>
              <td className="text-center">2</td>
              <td className="text-center">77.22</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    )
  }
}
class Scoretable extends React.Component {
  render() {
    return(
<div className="container my-5">
  <div className="row">
    <Matchscore />
    <Matchscore />
  </div>
</div>

    )
  }
}  

root.render(<Scoretable />);


