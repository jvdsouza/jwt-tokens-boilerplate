import React from 'react';
import logo from './logo.svg';
import './App.css';

//----components----
import PingComponent from './components/Ping/PingComponent';
import LoginComponent from './components/Login/LoginComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <LoginComponent username="admin" password="password"/>
        <PingComponent />
      </header>
    </div>
  );
}

export default App;
