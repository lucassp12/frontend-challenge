import React, { useState, MouseEvent } from 'react';

import InputMask from 'react-input-mask';
import DeleteIcon from '../../assets/Icons/delete.svg';

import { IPlace, usePlaces } from '../../contexts/places';

import { Container, ButtonsContainer, ContainerHeader } from './styles';

import { IAlert } from '../Alert';

interface ICardProps {
  place: IPlace;
  setIsOpen: () => void;
  dispatchAlert: ({ type, message }: IAlert) => void;
}

const CardPlaceEdit: React.FC<ICardProps> = ({
  place,
  setIsOpen,
  dispatchAlert,
}) => {
  const [placeEdit, setPlaceEdit] = useState('');
  const [goal, setGoal] = useState('');

  const { editPlace } = usePlaces();

  const HandleEdit = (evt: MouseEvent): void => {
    evt.preventDefault();

    if (placeEdit === '' && goal === '') {
      editPlace(place.id, place.place, place.goal);
    } else if (placeEdit === '') {
      editPlace(place.id, place.place, goal);
    } else if (goal === '') {
      editPlace(place.id, placeEdit, place.goal);
    }

    dispatchAlert({ type: 'success', message: 'Atualizado com sucesso!' });
    setIsOpen();
    setPlaceEdit('');
    setGoal('');
  };

  return (
    <Container>
      <ButtonsContainer>
        <button type="button" onClick={() => setIsOpen()}>
          <img src={DeleteIcon} alt="delete icon" />
        </button>
      </ButtonsContainer>
      <ContainerHeader>
        <img src={place.flag} alt={`${place.country}-${place.goal}`} />
        <strong>{place.country}</strong>
      </ContainerHeader>
      <span>
        Local:
        <input
          type="text"
          defaultValue={place.place}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setPlaceEdit(event.target.value)
          }
        />
      </span>
      <span>
        Meta:
        <InputMask
          mask="99/9999"
          type="text"
          defaultValue={place.goal}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setGoal(event.target.value)
          }
        />
      </span>
      <button type="button" onClick={evt => HandleEdit(evt)}>
        Salvar
      </button>
    </Container>
  );
};

export default CardPlaceEdit;
