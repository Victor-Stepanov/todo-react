import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
export interface ITagProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
  priority: 'low' | 'medium' | 'high';
  children: ReactNode;
}
