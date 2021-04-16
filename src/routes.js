import React, { Suspense, lazy, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import SearchLayout from './layouts/SearchLayout';

export const renderRoutes = (routes = []) => (
  <Suspense maxDuration={3000} fallback={<div>Loading . . .</div>}>
    <Switch>
      {routes.map((route, i) => {
        const Component = route.component || Fragment;

        return (
          <Route
            key={i}
            path={route.path}
            exact={route.exact}
            render={() => (
              <SearchLayout>
                <Component />
              </SearchLayout>
            )}
          />
        );
      })}
    </Switch>
  </Suspense>
);

const routes = [
  {
    exact: true,
    path: '/subreddits/:srName',
    component: lazy(() => import('./views/SubReddits'))
  },
  {
    exact: true,
    path: '*',
    component: lazy(() => import('./views/Home/'))
  }
];

export default routes;
