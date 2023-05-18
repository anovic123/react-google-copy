import { FC } from 'react';
import clsx from 'clsx';

export enum ButtonStyleEnum {
  PRIMARY = 'PRIMARY',
  BLUE = 'BLUE',
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
  });

  return (
    <button className={btnClasses} onClick={onClick} {...props}>
      {children}
    </button>
  );
};
