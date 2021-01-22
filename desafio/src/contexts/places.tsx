import React, {
  createContext,
  useCallback,
  useEffect,
  useState,
  useContext,
} from 'react';

import ApiPlaces from '../services/places';

export interface IPlace {
  id: string;
  country?: string;
  flag?: string;
  place: string;
  goal: string;
}

interface IPlacesContextData {
  places: IPlace[];
  addPlace({ country, flag, place, goal }: IPlace): void;
  editPlace(id: string, place: string, goal: string): void;
  deletePlace(id: string): void;
}

const PlacesContext = createContext<IPlacesContextData>(
  {} as IPlacesContextData,
);

export const PlacesProvider: React.FC = ({ children }) => {
  const [places, setPlaces] = useState<IPlace[]>([]);

  useEffect(() => {
    async function loadPlaces(): Promise<void> {
      const response = await ApiPlaces.get('/places');

      setPlaces(response.data);
    }
    loadPlaces();
  }, []);

  const addPlace = useCallback(
    ({ id, country, flag, place, goal }: IPlace) => {
      const data = {
        id,
        country,
        flag,
        place,
        goal,
      };
      ApiPlaces.post('places', data);
      setPlaces([...places, data]);
    },
    [places],
  );

  const editPlace = useCallback(
    (id: string, place: string, goal: string) => {
      const editedPlace = places.find(p => p.id === id);
      ApiPlaces.put(`/places/${id}`, { ...editedPlace, place, goal });
      setPlaces(places.map(p => (p.id === id ? { ...p, place, goal } : p)));
    },
    [places],
  );

  const deletePlace = useCallback(
    (id: string) => {
      ApiPlaces.delete(`/places/${id}`);

      const placesFiltred = places.filter(place => {
        return place.id !== id;
      });

      setPlaces(placesFiltred);
    },
    [places],
  );

  return (
    <PlacesContext.Provider
      value={{ addPlace, editPlace, deletePlace, places }}
    >
      {children}
    </PlacesContext.Provider>
  );
};

export const usePlaces = (): IPlacesContextData => {
  const context = useContext(PlacesContext);

  if (!context) {
    throw new Error('usePlaces must be used within an PlacesProvider');
  }

  return context;
};

export default PlacesContext;
