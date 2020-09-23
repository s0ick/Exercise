import React from 'react';
import style from './Footer.module.css';

const FormateDate = (props) => {
  return (
    <span className={style.clock}>
      {props.date.toLocaleTimeString()}
    </span>
  )
};

class Footer extends React.Component {
  state = {
    date: new Date()
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
    1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    })
  }

  render () {
    return (
      <footer className={style.footer}>
        <FormateDate date={this.state.date} />
      </footer>
    )
  }
}

export default Footer;