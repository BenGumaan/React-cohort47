import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PersonController from './components/PersonController';

function App() {

  return (
    <div className="app">
      <h1>Random Person's Information</h1>
      <PersonController />
    </div>
  )
}

export default App
