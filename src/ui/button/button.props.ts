import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

export interface IButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children?: ReactNode;
  appearance: 'primary' | 'secondary' | 'ghost';
  size?: 'small' | 'medium' | 'large';
  htmlType: 'button' | 'submit' | 'reset';
}
