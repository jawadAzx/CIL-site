import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App';

// react-snap prerenders each route to static HTML at build time, then react-snap
// itself (and real visitors' browsers loading that static HTML) hydrate it rather
// than rendering from scratch. `npm start`/a fresh client render has an empty
// #root, so it falls through to a normal createRoot render.
const container = document.getElementById('root');

if (container.hasChildNodes()) {
  hydrateRoot(
    container,
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

