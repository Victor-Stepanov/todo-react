import { ReactNode } from 'react';

export interface IModalProps {
  title?: string;
  onClose: () => void;
  children: ReactNode;
}
