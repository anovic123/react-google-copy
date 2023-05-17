import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';

import { HomePage } from './pages/home';

import { ROUTES } from './utils/routes';

interface AppProps {}

export const App: FC<AppProps> = ({}) => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<HomePage />} />
    </Routes>
  );
};