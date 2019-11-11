import React from 'react';
import { FormattedNumberParts, IntlProvider } from 'react-intl';
import IntlPolyfill from 'react-intl-polyfill';

const renderParts = (source, parts) => {
  console.log('parts with', source, parts);
  return (
    <div>
      <h2>{source}</h2>
      {parts.map((part, index) => <span key={source + part + index}>{part.value}</span>)}
    </div>
  );
};

const intl = () => {
  console.log(Intl.NumberFormat.prototype)
  const number = 123456;
  const intlFormattedParts =
    new Intl.NumberFormat('en', { style: 'currency', currency: 'EUR' })
      .formatToParts(number);
  return (
    <div>
      {renderParts('Intl .formatToParts', intlFormattedParts)}
    </div>
  )
};

function App () {
  return (
    <IntlProvider locale={navigator.language}>
      <IntlPolyfill locale={navigator.language}>
        <div className="App">
          <h1>React intl number parts formatter examples</h1>
          <div>
            {intl()}
          </div>
          <div>
            <FormattedNumberParts value={78901} style='currency' currency={'EUR'}>
              {parts => renderParts('react-intl <FormattedNumberParts> component', parts)}
            </FormattedNumberParts>
          </div>
        </div>
      </IntlPolyfill>
    </IntlProvider>
  );
}

export default App;
