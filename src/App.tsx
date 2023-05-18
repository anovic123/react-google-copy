import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';

import { HomePage } from './pages/home';
import { ResultPage } from './pages/result';

import { ROUTES } from './utils/routes';

interface AppProps {}

export const App: FC<AppProps> = ({}) => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<HomePage />} />
      <Route path={ROUTES.RESULT} element={<ResultPage />} />
    </Routes>
  );
};
