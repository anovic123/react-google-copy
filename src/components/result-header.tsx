import { FC, useState } from 'react';
import { Link } from 'react-router-dom';

import { SearchInput } from './search-input';
import { ResultHeaderActions } from './result-header-actions';

import { headerNavigate } from '../common/mocks';

import { useMediaQuery } from '../hooks/use-media-query';

import Logo from '../assets/small-logo.png';

interface ResultHeaderProps {
  activeLink: string;
  setActiveLink: React.Dispatch<React.SetStateAction<string>>;
}

export const ResultHeader: FC<ResultHeaderProps> = ({ activeLink, setActiveLink }) => {
  const isTablet = useMediaQuery(900);

  return (
    <header className="border-b border-[#ebebeb]">
      <div className="p-[0.5rem] md:p-[1.25rem] md:h-[4.3125rem] my-[.375rem] flex flex-wrap justify-between gap-5">
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 md:gap-10 flex-grow">
          <Link to="/" className="max-w-screen-md:m-auto">
            <img src={Logo} alt="Logo" className="object-contain" height={30} width={92} />
          </Link>
          <SearchInput />
        </div>

        {!isTablet && <ResultHeaderActions />}
      </div>
      <nav className="flex mt-1 md:ml-36 overflow-y-scroll md:overflow-y-auto max-h-screen">
        {headerNavigate.map(({ name, icon }: { name: string; icon: JSX.Element }) => (
          <span
            key={`headerLink-${name}`}
            className={`flex items-center p-3 text-[#5f6368] cursor-pointer relative ${
              activeLink === name ? 'text-[#1a73e8]' : ''
            }`}
            onClick={() => setActiveLink(name)}
          >
            <span className="hidden md:block mr-2">{icon}</span>
            <span className="text-sm">{name}</span>
            {activeLink === name && (
              <span className="h-[.1875rem] w-[calc(100%-1.25rem)] absolute bg-[#1a73e8] bottom-0 left-[.625rem]" />
            )}
          </span>
        ))}
      </nav>
    </header>
  );
};
