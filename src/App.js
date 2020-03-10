import React from 'react';
import logo from './logo.svg';
import './App.css';
import GetData from './components/GetData';


class App extends React.Component {

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <GetData />
        </header>
      </div>
    );

  }

}


export default App;
