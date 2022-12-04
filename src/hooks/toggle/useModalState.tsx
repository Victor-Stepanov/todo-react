import { useState } from 'react';

const useToggle = (active: boolean) => {
  const [isOpen, setIsOpen] = useState<boolean>(active);

  const onToggle = () => setIsOpen(!isOpen);

  return { isOpen, onToggle };
};

export default useToggle;
