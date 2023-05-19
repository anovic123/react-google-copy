import React from 'react';
import { Item } from '../common/types';

interface ResultImageItemProps extends Item {}

export const ResultImageItem: React.FC<ResultImageItemProps> = ({
  link,
  title,
  displayLink,
  image,
}) => {
  const imgLink = image?.contextLink;

  return (
    <div
      className="group flex flex-col max-w-[16rem] py-3 cursor-pointer"
      onClick={() => window.open(imgLink, '_blank')}
    >
      <div className="rounded-xl overflow-hidden h-auto md:h-[7.5rem] lg:h-[8.75rem] hover:shadow-c">
        <img src={link} className="w-full h-full object-cover" alt={title} />
      </div>
      <div className="text-xs text-[#70757a] pt-2">{displayLink}</div>
      <div className="text-sm text-[#3c4043] truncate pt-1 group-hover:underline">{title}</div>
    </div>
  );
};
