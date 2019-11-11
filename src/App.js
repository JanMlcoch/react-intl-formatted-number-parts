import React from 'react';
import logo from './logo.svg';
import './App.css';
import { FormattedNumberParts, IntlProvider } from 'react-intl';

function App () {
  return (
    <IntlProvider locale={navigator.language}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
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
          <div>
            <FormattedNumberParts value={123453} style='currency' currency={'CZK'}>
              {parts => {
                console.log(parts);
                return parts.map(part => <span>{part.value}</span>)
              }}
            </FormattedNumberParts>
          </div>

        </header>
      </div>
    </IntlProvider>
  );
}

export default App;
