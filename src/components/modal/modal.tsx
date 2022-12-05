import { FC } from 'react';
import ReactDOM from 'react-dom';
import { Button, CloseIcon } from '../../ui';
import style from './modal.module.scss';

import { useEffect } from 'react';

import ModalOverlay from '../modal-overlay/modal-overlay';
import { IModalProps } from './modal.props';

const modalRoot = document.querySelector('#modals') as HTMLElement;

const Modal: FC<IModalProps> = ({ title, onClose, children }) => {
  const handleEscKeydown = (evt: { key: string }) => {
    evt.key === 'Escape' && onClose();
  };

  const closeModalWithTheButton = (evt: any) => {
    evt.target && onClose();
  };

  useEffect(() => {
    document.addEventListener('keydown', handleEscKeydown);
    return () => {
      document.removeEventListener('keydown', handleEscKeydown);
    };
  });

  return ReactDOM.createPortal(
    <>
      <div className={style.modal}>
        <Button
          className={style.modal__button}
          onClick={closeModalWithTheButton}
          htmlType={'button'}
          appearance={'ghost'}
        >
          <CloseIcon />
        </Button>
        <h3 className={style.modal__title}>{title}</h3>
        {children}
      </div>
      <ModalOverlay onClick={onClose} />
    </>,
    modalRoot
  );
};

export default Modal;
