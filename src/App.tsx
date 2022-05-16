import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'cirrus-ui';

import { Home } from './home';
import { ProjectsAndBlog } from './projects-blog';

// TODO: read more about restoring ScrollToTop in react-router 6
// import { ScrollToTop } from './scroll';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects-blog' element={<ProjectsAndBlog />} />
      </Routes>
    </BrowserRouter>
  );
};
