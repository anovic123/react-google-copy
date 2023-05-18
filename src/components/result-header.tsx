import { FC, useState } from 'react';
import { Link } from 'react-router-dom';

import { TbGridDots } from 'react-icons/tb';
import { AiOutlineSetting } from 'react-icons/ai';

import { SearchInput } from './search-input';
import { Button } from './ui-kit/button';

import { headerNavigate } from '../common/mocks';

import Logo from '../assets/small-logo.png';

interface ResultHeaderProps {}

export const ResultHeader: FC<ResultHeaderProps> = ({}) => {
  const [activeLink, setActiveLink] = useState('Все');

  return (
    <header className="border-b border-[#ebebeb]">
      <div className="p-[1.25rem] md:h-[4.3125rem] my-[.375rem] flex flex-wrap justify-between gap-5">
        <div className="flex flex-wrap items-center gap-10 grow">
          <Link to="/">
            <img src={Logo} alt="Logo" className="object-contain" height={30} width={92} />
          </Link>
          <SearchInput />
        </div>
        <div className="flex items-center gap-5">
          <AiOutlineSetting size={25} />
          <TbGridDots size={25} />
          <Button btnStyle="BLUE">Войти</Button>
        </div>
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
