import { FC } from 'react';
import { ResultHeaderActions } from './result-header-actions';

interface HeaderProps {}

export const Header: FC<HeaderProps> = ({}) => {
  return (
    <header className="h-16 flex justify-end items-center gap-4 px-2 md:px-5">
      <ResultHeaderActions />
    </header>
  );
};
