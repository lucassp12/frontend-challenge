import React, { SelectHTMLAttributes } from 'react';

import { Container } from './styles';

interface ICountries {
  name: string;
  translations: {
    br: string;
  };
}

interface ISelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  title: string;
  countries: ICountries[];
}

const Select: React.FC<ISelectProps> = ({ title, countries, ...rest }) => (
  <Container>
    <span>{title}</span>
    <select id="select" {...rest}>
      <option value="" disabled selected>
        Selecione...
      </option>
      {countries &&
        countries.map(countrie => (
          <option key={countrie.name} value={countrie.name}>
            {countrie.translations.br}
          </option>
        ))}
    </select>
  </Container>
);

export default Select;
