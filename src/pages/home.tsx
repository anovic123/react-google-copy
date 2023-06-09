import { FC } from 'react';
import { Helmet } from 'react-helmet';

import { Footer } from '../components/footer';
import { SearchInput } from '../components/search-input';
import { Header } from '../components/header';
import { Button } from '../components/ui-kit/button';

import { searchLucky } from '../utils/constants';

import Logo from '../assets/google-logo.png';

interface HomePageProps {}

export const HomePage: FC<HomePageProps> = ({}) => {
  return (
    <>
      <Helmet>
        <meta name="description" content="Поиск в Google. Найдите информацию в Интернете." />
        <title>Google</title>
      </Helmet>
      <div className="flex h-[100vh] flex-col">
        <Header />
        <main className="grow flex justify-center">
          <div className="w-full px-2 md:px-5 flex flex-col items-center mt-24 md:mt-36">
            <img className="w-[10.75rem] md:w-[17rem] mb-8" src={Logo} alt="Logo" />
            <SearchInput />
            <div className="flex flex-wrap justify-center my-7 gap-3">
              <Button btnStyle="PRIMARY">Поиск в Google</Button>
              <a href={searchLucky}>
                <Button btnStyle="BLUE">Мне повезёт</Button>
              </a>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};
