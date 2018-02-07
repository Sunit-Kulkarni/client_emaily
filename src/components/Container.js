import React, { Component, PropTypes } from 'react';
import { Map, InfoWindow, Marker, GoogleApiComponent } from 'google-maps-react';

export class Container extends Component {
  render() {
    const style = {
      width: '100vw',
      height: '100vh'
    };
    return (
      <div>
        <Map google={this.props.google} />
      </div>
    );
  }
}

export default GoogleApiComponent({
  apiKey: 'AIzaSyCeBXreHZbVZNd31zwjlsTez_1nCmYCs6s'
})(Container);
