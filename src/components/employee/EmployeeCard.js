import React, { Component } from 'react';

class EmployeeCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture >
          <i class="far fa-user fa-5x"></i>
          </picture>
          <h3>Employee Name: <span className="card-employeeName">Mo</span></h3>
        </div>
      </div>
    );
  }
}

export default EmployeeCard;