import { FC } from 'react';
import { v1 } from 'uuid';

import { footerLinks, footerMenu } from '../common/mocks';

interface FooterProps {}

export const Footer: FC<FooterProps> = ({}) => {
  return (
    <footer className="bg-[#f2f2f2]">
      <div className="py-[.9375rem] md:px-[1.875rem] px-[1rem] text-[.9375rem] border-b border-[#dadce0]">
        <span className="text=[#70767a] text-[.9375rem]">Украина</span>
      </div>

      <div className="flex flex-wrap justify-between md:px-[1.875rem] px-[1rem] py-[.9375rem] gap-[.9375rem]">
        <div className="flex flex-wrap align-center gap-[.9375rem]">
          {footerLinks.map((el: Record<string, string>) => (
            <a href={el.link} target="_blank" key={`footerLink-${v1()}`}>
              {el.name}
            </a>
          ))}
        </div>
        <div className="flex flex-wrap align-center gap-[.9375rem]">
          {footerMenu.map((el: Record<string, string>) => (
            <a href={el.link} target="_blank" key={`footerLink-${v1()}`}>
              {el.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};
