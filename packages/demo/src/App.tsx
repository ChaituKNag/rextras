import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

import { hello, useCompStates } from 'rextras';

function App() {
  
  const { validCompStates, compState, setCompState } = useCompStates([
    'LOADING',
    'VIEWED'
  ]);

  useEffect(() => {
    setCompState(validCompStates.VIEWED);
  }, [setCompState, validCompStates])

  hello(compState as string);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
