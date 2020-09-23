import React from 'react';
import { connect } from 'react-redux';
import Map from './Map';
import { compose } from 'redux';

class MapContainer extends React.Component {
  render() {
    return (
      <Map {...this.props} />
    )
  }
}

let mapStateToProps = (state) => {
  return {
    latitude: state.MapPage.latitude,
    longitude: state.MapPage.longitude
  };
};

export default compose(
  connect(mapStateToProps, {})
)(MapContainer);