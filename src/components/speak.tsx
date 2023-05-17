import { FC } from 'react';

import { HiOutlineMicrophone } from 'react-icons/hi';

interface SpeakProps {
  isRecording: boolean;
}

export const Speak: FC<SpeakProps> = ({ isRecording }) => {
  const microphoneStyles = isRecording ? { color: '#f52500', fill: '#f52500' } : {};

  return (
    <div
      className="fixed rounded-xl bg-[#e9f5f9] h-[10rem] w-[30rem]"
      style={{ display: isRecording ? 'block' : 'none' }}
    >
      <div className="text-5xl gap-5 flex items-center justify-center h-full">
        Говорите <HiOutlineMicrophone style={microphoneStyles} />
      </div>
    </div>
  )
}