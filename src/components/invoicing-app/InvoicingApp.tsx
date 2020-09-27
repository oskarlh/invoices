import React, { ReactElement } from 'react';
import { I18nProvider } from 'components/i18n';
import Button from 'components/Button';

import logo from './logo.svg';
import './InvoicingApp.css';

function App(): ReactElement {
  return (
    <I18nProvider>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
            <Button />
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
    </I18nProvider>
  );
}

export default App;
