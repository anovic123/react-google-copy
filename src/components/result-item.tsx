import { FC } from 'react';

import { Item } from '../common/types';

interface ResultItemProps extends Item {}

export const ResultItem: FC<ResultItemProps> = ({ title, link, htmlSnippet }) => {
  const createMarkup = (html: string) => ({ __html: html });

  return <div className="flex flex-col py-1 max-w-[43.75rem]">
    <div className="group cursor-pointer" onClick={() => window.open(link, '_blank')}>

      <div className="group-hover:underline text-xl text-[#1a0dab] pt-2">
        {title}
      </div>

      <div 
        className="text-sm text-[#4d5156] leading-6 pt-1" dangerouslySetInnerHTML={createMarkup(htmlSnippet)}
      />

    </div>
  </div>
};
