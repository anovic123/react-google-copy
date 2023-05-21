import { FC } from 'react';
import clsx from 'clsx';

export enum ButtonStyleEnum {
  PRIMARY = 'PRIMARY',
  BLUE = 'BLUE',
  GRAY = 'GRAY',
  WHITE = 'WHITE',
}

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  /**
   * btnStyle button
   */
  btnStyle?: keyof typeof ButtonStyleEnum;
}

export const Button: FC<ButtonProps> = ({
  children,
  btnStyle = ButtonStyleEnum.PRIMARY,
  onClick,
  ...props
}) => {
  const btnClasses = clsx('text-center cursor-pointer  h-[2.25rem] rounded-md', {
    'bg-[#f8f9fa] border border-[#f8f9fa] px-[.9375rem] hover:border-[#dadce0] hover:shadow-c2':
      btnStyle === ButtonStyleEnum.PRIMARY,
    'bg-[#1a73e8] text-white px-[1.3rem] hover:bg-[#0857bf]': btnStyle === ButtonStyleEnum.BLUE,
    'bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold px-[.5625rem] sm:py-2 sm:px-[0.9rem] rounded active:bg-gray-300':
      btnStyle === ButtonStyleEnum.GRAY,
    'px-3 sm:px-6 py-2 hover:bg-gray-300 font-bold text-gray-800 border rounded active:bg-gray-300':
      btnStyle === ButtonStyleEnum.WHITE,
  });

  return (
    <button className={btnClasses} onClick={onClick} {...props}>
      {children}
    </button>
  );
};
