import ReactDOM from 'react-dom/client';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
const root = ReactDOM.createRoot(document.getElementById('root'));


class BMIcalculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            height: 0,
            weight: 0,
            bmi: 0,
            obcityLevel: ''
        }
    }
    updateHeight = (event) => {
        this.setState({
            height: event.target.value
        })
    }
    updateWeight = (event) => {
        this.setState({
            weight: event.target.value
        })
    }
   updateBMI = (event) => {
    event.preventDefault();

    let heightInMeters = this.state.height / 100;
    let bmiValue = this.state.weight / (heightInMeters * heightInMeters);

    let level = '';
    if (bmiValue < 18.5) {
        level = 'Underweight';
    } else if (bmiValue < 25) {
        level = 'Normal weight';
    } else if (bmiValue < 30) {
        level = 'Overweight';
    } else {
        level = 'Obesity';
    }

    this.setState({
        bmi: bmiValue.toFixed(2),
        obcityLevel: level
    });
};

    
    render() {
        return (
              <div className='container'>
                <div className="row">
                    <div className="col-8 offset-2">
                        <div className="card shadow">
                            <div className="card-header">
                                <h3>BMI calculator</h3>
                            </div>
                            <div className="card-body">
                                <form action="submit" onSubmit={this.updateBMI} >
                                 <div className='mb-3'>
                                        <label htmlFor="Height" className='form-label'>Height</label>
                                        <input name='Height' id='Height' type="number" className='form-control' onChange={this.updateHeight} />
                                    </div>
                                    <div className='mb-3'>
                                        <label htmlFor="weight" className='form-label'>Weight</label>
                                        <input name='weight' id='weight' type="number" className='form-control' onChange={this.updateWeight} />
                                    </div>
                                    <div>
                                        <input type="submit" className='btn btn-primary' value='calculate BMI' />
                                    </div>
                                    <div>
                                        <h3>{this.state.bmi} {this.state.obcityLevel}  </h3>
                                        <p></p>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>)
        
    }
}

root.render(<BMIcalculator />);


