import { FC } from 'react';

import { TbGridDots } from 'react-icons/tb';
import { AiOutlineSetting } from 'react-icons/ai';

import { Button } from './ui-kit/button';

interface ResultHeaderActionsProps {}

export const ResultHeaderActions: FC<ResultHeaderActionsProps> = ({}) => {
  return (
    <div className="flex items-center gap-5">
      <AiOutlineSetting className="cursor-pointer" size={25} />
      <TbGridDots className="cursor-pointer" size={25} />
      <Button btnStyle="BLUE">Войти</Button>
    </div>
  );
};
