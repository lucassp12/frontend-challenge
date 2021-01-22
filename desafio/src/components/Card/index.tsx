import React from 'react';

import { Container, ButtonsContainer, Button, ContainerHeader } from './styles';
import EditIcon from '../../assets/Icons/edit.svg';
import DeleteIcon from '../../assets/Icons/delete.svg';

import { IPlace } from '../../contexts/places';

interface ICardProps {
  place: IPlace;
  handleDelete: (id: string) => void;
  handleEdit: (place: IPlace) => void;
}

const Card: React.FC<ICardProps> = ({ place, handleDelete, handleEdit }) => (
  <Container>
    <ButtonsContainer>
      <Button image={EditIcon} onClick={() => handleEdit(place)} />
      <Button image={DeleteIcon} onClick={() => handleDelete(place.id)} />
    </ButtonsContainer>
    <ContainerHeader>
      <img src={place.flag} alt={`${place.country}-${place.goal}`} />
      <strong>{place.country}</strong>
    </ContainerHeader>
    <span>Local: {place.place}</span>
    <span>Meta: {place.goal}</span>
  </Container>
);

export default Card;
