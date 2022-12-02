import { DetailedHTMLProps, FormHTMLAttributes, ReactNode } from 'react';
export interface IFormProps
  extends DetailedHTMLProps<
    FormHTMLAttributes<HTMLFormElement>,
    HTMLFormElement
  > {
  children: ReactNode;
}
