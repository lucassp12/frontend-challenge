import React, { FormEvent, useState } from 'react';
import { v4 as uuid } from 'uuid';
import Input from '../Input';
import InputMask from '../InputMask';
import Button from '../Button';
import Select from '../Select';

import { usePlaces } from '../../contexts/places';

import { Container } from './styles';

import { IAlert } from '../Alert';

interface ICountries {
  name: string;
  translations: {
    br: string;
  };
  flag: string;
}

interface ISearchAreaProps {
  countries: ICountries[];
  dispatchAlert: ({ type, message }: IAlert) => void;
}

const SearchArea: React.FC<ISearchAreaProps> = ({
  countries,
  dispatchAlert,
}) => {
  const [country, setCountry] = useState('');
  const [place, setPlace] = useState('');
  const [goal, setGoal] = useState('');

  const { addPlace } = usePlaces();

  const handleSubmit = (evt: FormEvent): void => {
    evt.preventDefault();
    if (country === '' || place === '' || goal === '') {
      dispatchAlert({
        type: 'error',
        message: 'Você deve preencher todos os campos!',
      });
    } else {
      const id = uuid();

      const countrySelected = countries.find(c => c.name === country);

      addPlace({
        id,
        country: countrySelected?.translations.br,
        flag: countrySelected?.flag,
        place,
        goal,
      });

      dispatchAlert({ type: 'success', message: 'Criado com sucesso!' });

      setCountry('');
      setPlace('');
      setGoal('');
    }
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Select
          value={country}
          title="País"
          countries={countries}
          onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
            setCountry(event.target.value)
          }
        />
        <Input
          title="Local"
          value={place}
          placeholder="Digite o local que deseja conhecer"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setPlace(event.target.value)
          }
        />
        <InputMask
          value={goal}
          mask="99/9999"
          placeholder="mês/ano"
          title="Meta"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setGoal(event.target.value)
          }
        />
        <Button type="submit" title="Adicionar" />
      </form>
    </Container>
  );
};

export default SearchArea;
