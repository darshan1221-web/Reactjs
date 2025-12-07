import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
class Tourcard extends React.Component {
  render(){

    return(
      <div className="col-lg-4">
  <div className="card rounded-5 shadow ">
    <div className="position-relative    ">
      {/* Match Title */}
      <img className="img-fluid  rounded-top-5 " src="https://picsum.photos/600?random=1" alt="location" />
      <span className="badge bg-dark position-absolute bottom-0 end-0 m-3">
        ⭐ 4.5/5
      </span>
    </div>
    <div className="card-body d-flex justify-content-between">
      {/* Additional Info */}
      <div className="card-title fw-bold">amazing safari adventure
        <div className="row">
          <div className="col">
            <div>
              KIADB Export promotion
            </div>
            <div>
              industrial area <span>⭐⭐⭐⭐⭐</span>
            </div>
          </div>
        </div>
      </div>
      <div className="price"><span className="fw-bold">$5000</span>
        <p>per night</p>
      </div>
    </div>
  </div>
</div>
    )
  }
}
class Tourdetails extends React.Component {
  render() {
    return(
<div className="container my-5">
  <div className="row justify-content-between">
    <Tourcard />
    <Tourcard />
    <Tourcard />
  </div>
</div>

    )
  }
}  

root.render(<Tourdetails />);


