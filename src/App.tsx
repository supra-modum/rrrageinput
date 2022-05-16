import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import 'cirrus-ui';

import { Home } from './home';
import { ProjectsAndBlog } from './projects-blog';
import { textMainPageEng } from './model';

export const App: React.FC = () => {
  return (
    <div className='hero fullscreen bg-dark'>
      <div className='hero-body'>
        <div className='mx-auto'>
          <h1 className='title uppercase' style={{ color: 'white' }}>
            Хуй войне!
          </h1>
        </div>
      </div>
    </div>
  );
};
