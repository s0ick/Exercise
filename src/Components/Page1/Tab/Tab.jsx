import React from 'react';
import style from './Tab.module.css';

class Tab extends React.Component {
  state = {
    content: [
      {message: 'Hello, my name is Danya'},
      {message: 'This test item is written in React 16'},
      {message: 'I hope you will like it'}
    ]
  }
  render() {
    return (
      <div className={style.block}>
        <h1 className={style.title}>Tab-{this.props.id}</h1>
        <div className={style.content}>
          {this.state.content[this.props.id-1].message}
        </div>
      </div>
    )
  }
}

export default Tab;
