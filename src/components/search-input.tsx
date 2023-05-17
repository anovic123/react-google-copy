import { FC, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { IoMdClose } from 'react-icons/io';

import Microphone from '../assets/microphone.svg';
import KeyboardIcon from '../assets/keyboard.jpg';

interface SearchInputProps {}

export const SearchInput: FC<SearchInputProps> = ({}) => {
  const [searchValue, setSearchValue] = useState<string>('');

  const clearSearchValue = () => {
    setSearchValue('');
  };

  return (
    <div className="flex items-center min-h-[2.75rem] px-4 bg-white border border-solid border-gray-300 rounded-3xl w-full max-w-lg hover:shadow-blue-500/50">
      <AiOutlineSearch size={20} />
      <input
        className="grow outline-0 text-black/[0.87] pl-2"
        value={searchValue}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchValue(e.target.value)}
      />
      <div className="flex items-center gap-3">
        {searchValue && (
          <div className="border-r border-gray-400 pr-2">
            <IoMdClose size={23} className="cursor-pointer ml-1" onClick={clearSearchValue} />
          </div>
        )}
        <img src={KeyboardIcon} className="h-6 w-6 cursor-pointer img" alt="keyboard" />
        <img src={Microphone} className="h-6 w-6 cursor-pointer img" alt="Microphone" />
      </div>
    </div>
  );
};
