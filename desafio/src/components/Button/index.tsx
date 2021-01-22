import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
}

const Button: React.FC<IButtonProps> = ({ title, ...rest }) => (
  <>
    <Container {...rest}>{title}</Container>
  </>
);

export default Button;
