import { FC, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { IoMdClose } from 'react-icons/io';
import { TbCircleArrowLeft } from 'react-icons/tb';

import { Speak } from './speak';

import Microphone from '../assets/microphone.svg';
import KeyboardIcon from '../assets/keyboard.jpg';
import { ScreenKeyboard } from './screen-keyboard';

declare global {
  interface Window {
    webkitSpeechRecognition: any;
  }
}

interface SearchInputProps {}

export const SearchInput: FC<SearchInputProps> = ({}) => {
  const navigate = useNavigate();
  const { value } = useParams();

  const [searchValue, setSearchValue] = useState<string>(value || '');
  const [isRecording, setIsRecording] = useState<boolean>(false);

  const startListening = () => {
    setIsRecording(true);

    const recognition = new window.webkitSpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'ru-Ru';

    recognition.onresult = (e: any) => {
      const result = e.results[0][0].transcript;
      setSearchValue(result);
      navigate(`/search/${result}`);
    };

    recognition.onend = () => {
      setIsRecording(false);
    };

    recognition.start();
  };

  const clearSearchValue = () => {
    setSearchValue('');
  };

  const handleClick = (e: React.KeyboardEvent<HTMLInputElement>) => {
    e.key === 'Enter' && navigate(`/search/${searchValue}`);
  };

  const [activeKeyboard, setActiveKeyboard] = useState<boolean>(false);

  const handleKeyboard = () => {
    setActiveKeyboard(!activeKeyboard);
  };

  const handleEnter = () => {
    searchValue && navigate(`/search/${searchValue}`);
  };

  const handleClearValue = () => {
    setSearchValue((prev) => prev.slice(0, -1));
  };

  return (
    <div className="flex items-center min-h-[2.75rem] relative px-[0.4rem] md:px-2 bg-white border border-solid border-gray-300 rounded-3xl w-full max-w-[33.75rem] hover:shadow-blue-500/50">
      <AiOutlineSearch size={20} />
      <input
        className="grow outline-0 font-medium text-black/[0.87] pl-[.0625rem] sm:pl-2"
        value={searchValue}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchValue(e.target.value)}
        onKeyDown={handleClick}
      />
      <div className="flex items-center gap-[.125rem] sm:gap-2">
        {searchValue && activeKeyboard && (
          <TbCircleArrowLeft
            size={23}
            className="cursor-pointer ml-[.125rem]"
            onClick={handleClearValue}
          />
        )}
        {searchValue && (
          <div className="border-r border-gray-400 pr-[.125rem] sm:pr-2 ">
            <IoMdClose size={23} className="cursor-pointer" onClick={clearSearchValue} />
          </div>
        )}
        <img
          src={KeyboardIcon}
          className="h-5 w-5 sm:h-6  sm:w-6 cursor-pointer img"
          alt="keyboard"
          onClick={handleKeyboard}
        />
        <img
          src={Microphone}
          className="h-5 w-5 sm:h-6  sm:w-6 cursor-pointer img"
          alt="Microphone"
          onClick={startListening}
        />
      </div>
      {activeKeyboard && (
        <ScreenKeyboard setSearchValue={setSearchValue} handleEnter={handleEnter} />
      )}
      <Speak isRecording={isRecording} />
    </div>
  );
};
