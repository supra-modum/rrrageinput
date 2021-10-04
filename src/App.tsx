import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import 'cirrus-ui';

import { Home } from '@rrrageinput/home';
import { ProjectsAndBlog } from '@rrrageinput/projects-blog';

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
