import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

const keys = require('../../../config/keys');

//import { changeMapCenter } from "../actions";

class GoogleMap extends Component {
  componentDidMount() {
    let script = document.createElement('script');

    script.setAttribute('type', 'text/javascript');
    script.setAttribute(
      'src',
      'https://maps.googleapis.com/maps/api/js?key=' +
        keys.googleMapsKey +
        '&callback=initMap'
    );
    document.getElementsByTagName('head')[0].appendChild(script);

    window.initMap = () => {
      this.map = new google.maps.Map(document.getElementById('map'), {
        center: this.props.defaultCenter,
        zoom: this.props.defaultZoom
      });

      this.map.addListener('center_changed', event => {
        let center = {
          lat: this.map.getCenter().lat(),
          lng: this.map.getCenter().lng()
        };
        this.props.onMapCenterChanging(center);
      });
    };
  }

  render() {
    return <div id="map" />;
  }
}

const mapStateToProps = state => {
  //refactor with ES6
  return {
    mapPoints: state.mapPoints
  };
};

export default connect(mapStateToProps)(GoogleMap);
