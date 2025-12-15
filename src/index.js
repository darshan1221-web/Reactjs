import ReactDOM from 'react-dom/client';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

class EMIcalculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loanAmount: 0,
            interestRate: 0,
            tenureYears: 0,
            emi: 0
        };
    }

    updateLoanAmount = (event) => {
        this.setState({ loanAmount: event.target.value });
    };

    updateInterestRate = (event) => {
        this.setState({ interestRate: event.target.value });
    };

    updateTenureYears = (event) => {
        this.setState({ tenureYears: event.target.value });
    };
    calculateEMI = (event) => {
        event.preventDefault();

        let P = parseFloat(this.state.loanAmount);
        let R = parseFloat(this.state.interestRate) / (12 * 100); // monthly interest rate
        let N = parseFloat(this.state.tenureYears) * 12; // total number of monthly payments

        let emiValue = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);

        this.setState({
            emi: emiValue.toFixed(2)
        });
    }

    render() {
        return (
            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card shadow">
                            <div className="card-header bg-primary text-white">
                                <h4 className="mb-0">EMI Calculator</h4>
                            </div>

                            <div className="card-body">
                                <table className="table table-bordered align-middle">
                                    <tbody>
                                        <tr>
                                            <th className="w-50">Loan Amount (₹)</th>
                                            <td>
                                                <input
                                                    type="number"
                                                    id="loanAmount"
                                                    className="form-control"
                                                    placeholder="Enter loan amount"
                                                    onChange={this.updateLoanAmount}
                                                />
                                            </td>
                                        </tr>

                                        <tr>
                                            <th>Interest Rate (% per annum)</th>
                                            <td>
                                                <input
                                                    type="number"
                                                    id="interestRate"
                                                    className="form-control"
                                                    placeholder="Enter interest rate"
                                                    onChange={this.updateInterestRate}
                                                />
                                            </td>
                                        </tr>

                                        <tr>
                                            <th>Loan Tenure (Years)</th>
                                            <td>
                                                <input
                                                    type="number"
                                                    id="tenureYears"
                                                    className="form-control"
                                                    placeholder="Enter tenure"
                                                    onChange={this.updateTenureYears}
                                                />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>

                                <div className="text-center">
                                    <button className="btn btn-success px-4" onClick={this.calculateEMI} >
                                        Calculate EMI
                                    </button>

                                    <div className="mt-4">
                                        <h5>Your EMI is: ₹ {this.state.emi}</h5>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

root.render(<EMIcalculator />);
