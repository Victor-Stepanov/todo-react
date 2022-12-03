import { useState } from 'react';

const useModalState = (active:boolean) => {
  const [isOpen, setIsOpen] = useState<boolean>(active);

  
  const onToggle = () => setIsOpen(!isOpen);

  return {isOpen, onToggle };
};

export default useModalState;
