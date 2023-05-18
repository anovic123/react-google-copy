import { FC, useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { IoMdClose } from 'react-icons/io';

import { Speak } from './speak';

import Microphone from '../assets/microphone.svg';
import KeyboardIcon from '../assets/keyboard.jpg';

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

  return (
    <div className="flex relative items-center min-h-[2.75rem] px-4 bg-white border border-solid border-gray-300 rounded-3xl w-full max-w-lg hover:shadow-blue-500/50">
      <AiOutlineSearch size={20} />
      <input
        className="grow outline-0 text-black/[0.87] pl-2"
        value={searchValue}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchValue(e.target.value)}
        onKeyDown={handleClick}
      />
      <div className="flex items-center gap-3">
        {searchValue && (
          <div className="border-r border-gray-400 pr-2">
            <IoMdClose size={23} className="cursor-pointer ml-1" onClick={clearSearchValue} />
          </div>
        )}
        <img src={KeyboardIcon} className="h-6 w-6 cursor-pointer img" alt="keyboard" />
        <img
          src={Microphone}
          className="h-6 w-6 cursor-pointer img"
          alt="Microphone"
          onClick={startListening}
        />
      </div>
      <Speak isRecording={isRecording} />
    </div>
  );
};
