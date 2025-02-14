import logo from './logo.svg';
import './App.css';
import Saludar from './components/Saludar';
import React from 'react';

function App() {
  const user = {
    name: 'Daisy Dew',
    age: 33,
  }; 

  const saludarFn = (name, age) => {
    //console.log('Hola ' + name + ' tienes ' + age + ' años'); 
    //las template strings scriben con comillas invertidas (``).
    console.log(`Hola ${name} tienes ${age} años`);
    
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Saludar user={user} saludarFn={saludarFn}/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
