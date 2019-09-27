import React, { Component } from 'react';

class OwnerCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture >
          <i class="far fa-user fa-5x"></i>
          </picture>
          <h3>Owner Name: <span className="card-employeeName">Mo</span></h3>
        </div>
      </div>
    );
  }
}

export default OwnerCard;