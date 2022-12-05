import { FC } from 'react';
import style from './modal-overlay.module.scss';
import { IModalOverlayProps } from './modal-overlay.props';

const ModalOverlay: FC<IModalOverlayProps> = ({ onClick }) => {
  return <div className={style.overlay} onClick={onClick}></div>;
};

export default ModalOverlay;
