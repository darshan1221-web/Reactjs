import React from "react";
export default class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      thali: 0,
      roti: 0,
      chhas: 0,
      papad: 0,
      sweet: 0,
    };
    this.price = {
      thali: 200,
      roti: 20,
      chhas: 10,
      papad: 50,
      sweet: 100,
    };

    this.name = props.name;
    this.tableno = props.tableno;
  }

  updatethali = () => {
    this.setState({
      thali: this.state.thali + 1
    });
  }
  updateroti = () => {
    this.setState({
      roti: this.state.roti + 1
    });
  }
  updatechhas = () => {
    this.setState({
      chhas: this.state.chhas + 1
    });
  }
  updatepapad = () => {
    this.setState({
      papad: this.state.papad + 1
    });
  }
  updatesweet = () => {
    this.setState({
      sweet: this.state.sweet + 1
    });
  }
   getTotal = () => {
    const { thali, roti, chhas, papad, sweet } = this.state;
    const p = this.price;
    return (
      thali * p.thali +
      roti * p.roti +
      chhas * p.chhas +
      papad * p.papad +
      sweet * p.sweet
    );
  };
  
  render() {
    return (
      <div className="col-lg-4">
        <div className="card my-3">
          <div className="card-header text-bg-danger d-flex justify-content-between">
            <h5>{this.name}</h5>
            <h5><span className="badge bg-white text-primary">{this.tableno}</span></h5>
          </div>
          <div className="card-body">
            <button type="button" className="btn btn-primary w-100" onClick={this.updatethali}>Thali - <span className="badge bg-white text-primary">{this.state.thali}</span><span className="badge bg-white text-primary m-1">{this.price.thali}</span></button>
            <div className="row  mt-2">
              <div className="col-6 ">
                <button type="button" className="btn btn-dark w-100" onClick={this.updateroti}>Roti - <span className="badge bg-white text-dark">{this.state.roti}</span><span className="badge bg-white text-primary m-1">{this.price.roti}</span></button>
              </div>
              <div className="col-6">
                <button type="button" className="btn btn-warning w-100" onClick={this.updatechhas}>chhas - <span className="badge bg-white text-dark">{this.state.chhas}</span><span className="badge bg-white text-primary m-1">{this.price.chhas}</span></button>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-6">
                <button type="button" className="btn btn-info w-100" onClick={this.updatepapad}>Papad- <span className="badge bg-white text-dark">{this.state.papad}</span><span className="badge bg-white text-primary m-1">{this.price.papad}</span></button>
              </div>
              <div className="col-6">
                <button type="button" className="btn btn-success w-100" onClick={this.updatesweet}>sweet - <span className="badge bg-white text-dark">{this.state.sweet}</span><span className="badge bg-white text-primary m-1">{this.price.sweet}</span></button>
              </div>
            </div>
          </div>
          <div className="card-footer d-flex justify-content-between">
            <span className="h5">Total</span>
            <span className="h5">₹ {this.getTotal()}</span>
          </div>
        </div>
      </div>)

  }
}