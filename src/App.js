import React from 'react';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Page1 from './Components/Page1/Page1';
import Page2 from './Components/Page2/Page2';
import store from './Redux/store';

class App extends React.Component{
  render() {
    return (
      <div className="App">
        <Header />
        <div className="App-wrapper">
          <Route path='/page1' render={() => <Page1 />} />
          <Route path='/page2' render={() => <Page2 />} />
          <Redirect to='/page2' />
        </div>
        <Footer />
      </div>
    );
  }
}

const AppContainer = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  )
}

export default AppContainer;
