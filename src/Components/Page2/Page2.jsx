import React from 'react';
import MapForm from './MapForm/MapForm';
import MapContainer from './MapB/MapContainer';
import style from './Page2.module.css';
import { connect } from 'react-redux';
import  { getData } from '../../Redux/mapReducer';

class Page2 extends React.Component {
  onSubmit = (formData) => {
    let { Address } = formData;
    this.props.getData(Address);
  }

  render() {
    return (
      <div className={style.block}>
        <MapForm onSubmit={this.onSubmit} />
        <MapContainer/>
      </div>
    )
  }
}

export default connect(null, { getData })(Page2);