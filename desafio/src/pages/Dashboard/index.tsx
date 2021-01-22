import React, { useState, useEffect } from 'react';

import Header from '../../components/Header';
import SearchArea from '../../components/SearchArea';
import Card from '../../components/Card';
import Modal from '../../components/Modal';
import CardPlaceEdit from '../../components/CardPlaceEdit';

import Alert, { IAlert } from '../../components/Alert';

import { Container } from './styles';

import ApiCountries from '../../services/countries';

import { usePlaces, IPlace } from '../../contexts/places';

interface ICountries {
  name: string;
  flag: string;
  translations: {
    br: string;
  };
}

const Dashboard: React.FC = () => {
  const [countries, setCountries] = useState<ICountries[]>([]);
  const [placeEdit, setPlaceEdit] = useState<IPlace>({} as IPlace);
  const [modalOpen, setModalOpen] = useState(false);
  const [alertActive, setAlertActive] = useState(false);
  const [alert, setAlert] = useState<IAlert>({} as IAlert);

  const { deletePlace, places } = usePlaces();

  useEffect(() => {
    async function loadCountries(): Promise<void> {
      const response = await ApiCountries.get('/rest/v2/all');
      setCountries(response.data);
    }
    loadCountries();
  }, []);

  function toggleModal(): void {
    setModalOpen(!modalOpen);
  }

  function handleEditPlace(place: IPlace): void {
    toggleModal();
    setPlaceEdit(place);
  }

  function toggleAlert(): void {
    setAlertActive(!alertActive);
  }

  function dispatchAlert({ type, message }: IAlert): void {
    setAlert({ type, message });
    toggleAlert();
  }

  function handleDeletePlace(id: string): void {
    deletePlace(id);
    dispatchAlert({ type: 'success', message: 'Removido com sucesso!' });
  }

  return (
    <>
      <Header />
      <SearchArea countries={countries} dispatchAlert={dispatchAlert} />
      <Container>
        {places &&
          places.map(place => (
            <Card
              key={place.id}
              place={place}
              handleDelete={handleDeletePlace}
              handleEdit={handleEditPlace}
            />
          ))}
      </Container>
      <Modal isOpen={modalOpen} setIsOpen={toggleModal}>
        <CardPlaceEdit
          place={placeEdit}
          setIsOpen={toggleModal}
          dispatchAlert={dispatchAlert}
        />
      </Modal>
      {alertActive && (
        <Alert
          type={alert.type}
          message={alert.message}
          setIsActive={toggleAlert}
        />
      )}
    </>
  );
};

export default Dashboard;
