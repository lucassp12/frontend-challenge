import React, { InputHTMLAttributes } from 'react';
import InputMask from 'react-input-mask';

import { Container } from './styles';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  title: string;
  placeholder: string;
  mask: string;
}

const Input: React.FC<IInputProps> = ({
  title,
  placeholder,
  mask,
  ...rest
}) => (
  <Container>
    <label htmlFor="inputMask">{title}</label>
    <InputMask id="inputMask" mask={mask} placeholder={placeholder} {...rest} />
  </Container>
);

export default Input;
