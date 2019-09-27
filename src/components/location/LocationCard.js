import React, { Component } from 'react';

class LocationCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture >
          <i class="fas fa-map-marker-alt fa-5x"></i>
          </picture>
          <h3>Location Name: <span className="card-employeeName">PuppyVille</span></h3>
        </div>
      </div>
    );
  }
}

export default LocationCard;