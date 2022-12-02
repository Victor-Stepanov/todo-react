import { useState } from 'react';

const useModalState = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);
  const onToggle = () => setIsOpen(!isOpen);

  return { onOpen, onClose, isOpen, onToggle };
};

export default useModalState;
