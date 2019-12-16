import React from 'react';
//import logo from './logo.svg';
//import './App.css';
import './splash.css';
//import * as foo from './user.js';
//import displayUser from './user.js';
import {displayUser, DisplayRecord } from './user.js';

/*
        <img src={ logo } className="App-logo" alt="logo" />
*/

const users = {
  id: '1',
  firstName: 'Harper',
  lastName: 'Perez',
};

function App() {
  return (
    <div className="App">
    {displayUser(users)}
    <DisplayRecord eventName="50m" time="0m43s" />
    <DisplayRecord eventName="100m LS" time="1m16s" />
    </div>
  );
}

export default App;

// vim: et ts=2 sw=2 ai
