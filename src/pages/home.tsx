import { FC } from 'react';

import Logo from '../assets/google-logo.png';
import { Footer } from '../components/footer';
import { SearchInput } from '../components/search-input';

interface HomePageProps {}

export const HomePage: FC<HomePageProps> = ({}) => {
  return (
    <div className="flex h-[100vh] flex-col">
      <main className="grow flex justify-center">
        <div className="w-full px-5 flex flex-col items-center mt-44">
          <img className="w-[10.75rem] md:w-[17rem] mb-8" src={Logo} alt="Logo" />
          <SearchInput />
        </div>
      </main>
      <Footer />
    </div>
  );
};
