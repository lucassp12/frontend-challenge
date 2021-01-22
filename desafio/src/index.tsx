import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { PlacesProvider } from './hooks/placesContext';

ReactDOM.render(
  <React.StrictMode>
    <PlacesProvider>
      <App />
    </PlacesProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
