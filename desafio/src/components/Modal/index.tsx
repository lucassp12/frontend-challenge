import React, { useState, useEffect } from 'react';
import ModalUI from '@material-ui/core/Modal';

interface IModal {
  isOpen: boolean;
  children: any;
  setIsOpen: () => void;
}

const Modal: React.FC<IModal> = ({ isOpen, children, setIsOpen }) => {
  const [modalStatus, setModalStatus] = useState(isOpen);

  useEffect(() => {
    setModalStatus(isOpen);
  }, [isOpen]);

  const handleClose = (): void => {
    setIsOpen();
  };

  return (
    <ModalUI open={modalStatus} onClose={handleClose}>
      {children}
    </ModalUI>
  );
};

export default Modal;
