import React, { Suspense } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import 'cirrus-ui';

import { ScrollToTop } from './scroll';
import { App } from './App';
import { RenderLoader } from './ui';

render(
  <Suspense fallback={RenderLoader}>
    <Router>
      <ScrollToTop />
      <App />
    </Router>
  </Suspense>,
  document.getElementById('root'),
);
