import { FC } from 'react';

import { TbGridDots } from 'react-icons/tb';
import { AiOutlineSetting } from 'react-icons/ai';

import { Button } from './ui-kit/button';

interface ResultHeaderActionsProps {}

export const ResultHeaderActions: FC<ResultHeaderActionsProps> = ({}) => {
  return (
    <div className="flex items-center gap-5">
      <AiOutlineSetting size={25} />
      <TbGridDots size={25} />
      <Button btnStyle="BLUE">Войти</Button>
    </div>
  );
};
