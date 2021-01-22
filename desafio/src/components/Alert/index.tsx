import React, { useEffect } from 'react';

import { Container } from './styles';

export interface IAlert {
  type: 'success' | 'error';
  message: string;
}

export interface IAlertProps {
  type: 'success' | 'error';
  message: string;
  setIsActive: () => void;
}

const Alert: React.FC<IAlertProps> = ({ type, message, setIsActive }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsActive();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [setIsActive]);

  return <Container severity={type}>{message}</Container>;
};

export default Alert;
