import React from 'react';
import { FormattedNumberParts, IntlProvider } from 'react-intl';

const renderParts = (source, parts) => {
  console.log('parts with', source, parts);
  return parts.map((part, index) =>
    <span key={source + part + index}>{part.value}</span>);
};

const intl = () => {
  const number = 123456;
  const intlFormattedParts =
    new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' })
      .formatToParts(number);
  return (
    <div>
      {renderParts('intl', intlFormattedParts)}
    </div>
  )
};

function App () {
  return (
    <IntlProvider locale={navigator.language}>
      <div className="App">
        <div>
          {intl()}
        </div>
        <div>
          <FormattedNumberParts value={78901} style='currency' currency={'CZK'}>
            {parts => renderParts('react-intl', parts)}
          </FormattedNumberParts>
        </div>
      </div>
    </IntlProvider>
  );
}

export default App;
