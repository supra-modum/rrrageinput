import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import 'cirrus-ui';

import { Home, ProjectsAndBlog } from './exports';

export const App: React.FC = () => {
  return (
    <>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/home'>
          <Redirect to='/' />
        </Route>
        <Route exact path='/projects-blog' component={ProjectsAndBlog} />
      </Switch>
    </>
  );
};
