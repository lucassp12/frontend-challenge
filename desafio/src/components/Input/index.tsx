import React, { InputHTMLAttributes } from 'react';

import { Container } from './styles';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  title: string;
  placeholder: string;
}

const Input: React.FC<IInputProps> = ({ title, placeholder, ...rest }) => (
  <Container>
    <label htmlFor="input">{title}</label>
    <input id="input" type="text" placeholder={placeholder} {...rest} />
  </Container>
);

export default Input;
