import React, { useState } from 'react';
import { Filters } from '../../types/FilterTypes';

interface FilterBoxProps {
  onApplyFilters: (filters: Filters) => void;
}

const FilterBox: React.FC<FilterBoxProps> = ({ onApplyFilters }) => {
  const [filters, setFilters] = useState<Filters>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const handleApplyFilters = () => {
    onApplyFilters(filters);
  };

  return (
    <div className="filter-box">
      <input type="text" name="director" placeholder="Director" onChange={handleChange} />
      <input type="text" name="mainCharacter" placeholder="Personaje Principal" onChange={handleChange} />
      <input type="number" name="year" placeholder="Año" onChange={handleChange} />
      <input type="text" name="genre" placeholder="Género" onChange={handleChange} />
      <input type="number" name="imdbPosition" placeholder="Posición IMDb" onChange={handleChange} />
      <input type="number" name="duration" placeholder="Duración (min)" onChange={handleChange} />
      <input type="number" name="rating" placeholder="Calificación" onChange={handleChange} />
      <button onClick={handleApplyFilters}>Aplicar Filtros</button>
    </div>
  );
};

export default FilterBox;

