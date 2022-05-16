import * as React from 'react';
import { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import 'cirrus-ui';

import { App } from './App';
import { RenderLoader } from './ui';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Suspense fallback={RenderLoader}>
    <App />
  </Suspense>,
);
