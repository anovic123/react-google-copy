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
  ...props
}) => {
  const btnClasses = clsx('text-center cursor-pointer px-[.9375rem] h-[2.25rem] rounded-md', {
    'bg-[#f8f9fa] border border-[#f8f9fa] hover:border-[#dadce0] hover:shadow-c2':
      btnStyle === ButtonStyleEnum.PRIMARY,
    'bg-[#1a73e8] text-white hover:bg-[#0857bf]': btnStyle === ButtonStyleEnum.BLUE,
  });

  return (
    <button className={btnClasses} {...props}>
      {children}
    </button>
  );
};
