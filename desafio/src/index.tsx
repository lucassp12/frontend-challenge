import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { PlacesProvider } from './contexts/places';

ReactDOM.render(
  <React.StrictMode>
    <PlacesProvider>
      <App />
    </PlacesProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
