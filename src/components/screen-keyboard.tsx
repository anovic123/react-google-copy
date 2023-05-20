import { FC, useState } from 'react';
import { v1 } from 'uuid';
import { AiOutlineEnter } from 'react-icons/ai';

import { keyboardButtons, keyboardButtons2 } from '../common/mocks/keyboardButtons';
import { Button } from './ui-kit/button';

interface ScreenKeyboardProps {
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  handleEnter: () => void;
}

export const ScreenKeyboard: FC<ScreenKeyboardProps> = ({ setSearchValue, handleEnter }) => {
  const [isSymbols, setIsSymbols] = useState<boolean>(false);

  const handleClick = (label: string) => {
    setSearchValue((prevValue) => prevValue + label);
  };

  const handleSpaceClick = () => {
    setSearchValue((prevValue) => prevValue + ' ');
  };

  const handleSymbolClick = () => {
    setIsSymbols(!isSymbols);
  };

  return (
    <div className="flex justify-center w-[100%] left-0 flex-wrap gap-1 md:gap-2 absolute top-14 bg-white border rounded p-[0.45rem] md:p-[0.7rem]">
      {!isSymbols
        ? keyboardButtons.map((button) => (
            <Button key={v1()} btnStyle="GRAY" onClick={() => handleClick(button.label)}>
              {button.label}
            </Button>
          ))
        : keyboardButtons2.map((button) => (
            <Button key={v1()} btnStyle="GRAY" onClick={() => handleClick(button.label)}>
              {button.label}
            </Button>
          ))}

      <div className="flex justify-between gap-1 md:gap-3 w-[100%]">
        <Button btnStyle="WHITE" onClick={handleSymbolClick}>
          123
        </Button>
        <Button btnStyle="WHITE" onClick={handleSpaceClick} style={{ width: '80%' }}>
          Space
        </Button>
        <Button btnStyle="WHITE" onClick={handleEnter}>
          <AiOutlineEnter size={20} />
        </Button>
      </div>
    </div>
  );
};
