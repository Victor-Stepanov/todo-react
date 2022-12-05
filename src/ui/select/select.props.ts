import { DetailedHTMLProps, SelectHTMLAttributes } from 'react';
export interface ISelectProps
  extends DetailedHTMLProps<
    SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  > {
  arrOptions:string[]
}
