import { FC, useState } from 'react';
import { v1 } from 'uuid';
import { AiOutlineEnter } from 'react-icons/ai';
import { MdOutlineLanguage } from 'react-icons/md';

import {
  keyboardEnButtons,
  keyboardRuButtons,
  keyboardButtons2,
} from '../common/mocks/keyboardButtons';

import { Button } from './ui-kit/button';

interface ScreenKeyboardProps {
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  handleEnter: () => void;
}

export const ScreenKeyboard: FC<ScreenKeyboardProps> = ({ setSearchValue, handleEnter }) => {
  const [isSymbols, setIsSymbols] = useState<boolean>(false);
  const [isLanguage, setIsLanguage] = useState<'En' | 'Ru'>('Ru');

  const handleKeyClick = (label: string) => {
    setSearchValue((prevValue) => prevValue + label);
  };

  const handleSpaceClick = () => {
    setSearchValue((prevValue) => prevValue + ' ');
  };

  const handleSymbolClick = () => {
    setIsSymbols(!isSymbols);
  };

  const handleChangeLanguage = () => {
    setIsLanguage((prevLanguage) => (prevLanguage === 'Ru' ? 'En' : 'Ru'));
  };

  const renderButtons = (keyboardButtons: { label: string }[]) => {
    return keyboardButtons.map((button) => (
      <Button key={v1()} btnStyle="GRAY" onClick={() => handleKeyClick(button.label)}>
        {button.label}
      </Button>
    ));
  };

  return (
    <div className="flex justify-center z-10 w-[100%] left-0 flex-wrap gap-1 md:gap-2 absolute top-14 bg-white border rounded p-[0.45rem] md:p-[0.5rem]">
      
      {!isSymbols
        ? isLanguage === 'En'
          ? renderButtons(keyboardEnButtons)
          : renderButtons(keyboardRuButtons)
        : renderButtons(keyboardButtons2)}

      <div className="flex justify-between gap-1 md:gap-3 w-[100%]">
        <Button btnStyle="WHITE" onClick={handleSymbolClick}>
          123
        </Button>
        <Button btnStyle="WHITE" onClick={handleSpaceClick} style={{ width: '80%' }}>
          Space
        </Button>
        <Button btnStyle="WHITE" onClick={handleChangeLanguage}>
          <MdOutlineLanguage size={20} />
        </Button>
        <Button btnStyle="WHITE" onClick={handleEnter}>
          <AiOutlineEnter size={20} />
        </Button>
      </div>
    </div>
  );
};