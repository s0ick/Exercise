import React from 'react';
import ReactMapGl, { Marker, Popup } from 'react-map-gl';
import pin from '../../../Assets/pin.svg';
import style from '../Page2.module.css';

const TOKEN = "pk.eyJ1IjoiczBpY2siLCJhIjoiY2tmZjY3MGpyMGJyODJ5bzN5Z21icnM4MiJ9.QU7ztvttw-WtT9I22Kd8dQ";

class MapB extends React.Component {
  state = {
    latitude: this.props.latitude,
    longitude: this.props.longitude, 
    zoom: 10,
    width: '100vw',
    height: '650px'
  }
  latitudePin = this.props.latitude
  longitudePin = this.props.longitude
  activePopup = false;

  componentDidUpdate(prevProps) {
    if(prevProps.latitude !== this.props.latitude) {
      this.updateStateMap();
    }
  }

  updateStateMap() {
    this.setState({
      latitude: this.props.latitude,
      longitude: this.props.longitude
    });
    this.latitudePin = this.props.latitude;
    this.longitudePin = this.props.longitude;
  }

  onClickPin = () => {
    this.activePopup = !this.activePopup;
    this.updateStateMap();
  }

  onChangeMap = (viewport) => {
    this.setState(viewport)
  }
  render() {
    return (
      <div>
        <ReactMapGl 
          {...this.state}
          mapboxApiAccessToken={TOKEN}
          mapStyle="mapbox://styles/s0ick/ckff6tx2b0qk019s0swtiydx0"
          onViewportChange={viewport => {this.onChangeMap(viewport)}} 
        >
          <Marker 
            key={this.props.id} 
            latitude={this.latitudePin} 
            longitude={this.longitudePin}

          >

            <img src={pin} alt="PIN" className={style.pin} onClick={this.onClickPin} />
          </Marker>

          {this.activePopup 
          ? (<Popup 
              latitude={this.latitudePin} 
              longitude={this.longitudePin}
            >
              <div>
                <span className={style.popup}>latitud: {this.latitudePin} longitude: {this.longitudePin}</span>
              </div>
            </Popup>)
          : null
          }

        </ReactMapGl>
      </div>
    )
  }
}

export default MapB;