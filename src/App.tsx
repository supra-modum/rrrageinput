import React from 'react';
// import { Switch, Route, Redirect } from 'react-router-dom';
import 'cirrus-ui';

// import { Home } from './home';
// import { ProjectsAndBlog } from './projects-blog';
// import { textMainPageEng } from './model';

export const App: React.FC = () => {
  return (
    <div className='hero fullscreen bg-yellow-300'>
      <div className='hero-body'>
        <div className='mx-auto'>
          <h1 className='title'>
            <a
              href='https://savelife.in.ua/en/donate-en/'
              className='text-blue-600'
            >
              savelife.in.ua
            </a>
          </h1>
        </div>
      </div>
    </div>
  );
};
