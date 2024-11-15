import React, { useState } from 'react';
import { Filters } from '../../types/FilterTypes';
import styles from "./FilterComponent.module.css"

interface FilterBoxProps {
  onApplyFilters: (filters: Filters) => void;
}

const FilterBox: React.FC<FilterBoxProps> = ({ onApplyFilters }) => {
  const [sortBy, setSortBy] = useState<Filters['sortBy']>('year');
  const [order, setOrder] = useState<Filters['order']>('desc');

  const handleApplyFilters = () => {
    onApplyFilters({ sortBy, order });
  };

  return (
    <div className={styles.filterboxContainer}>
      <div className={styles.filterbox}>
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value as Filters['sortBy'])}>
          <option value="year">Año</option>
          <option value="imdbPosition">Posición IMDb</option>
          <option value="rating">Rating</option>
          <option value="duration">Duración</option>
        </select>
        <select value={order} onChange={(e) => setOrder(e.target.value as Filters['order'])}>
          <option value="asc">Ascendente</option>
          <option value="desc">Descendente</option>
        </select>
        <button onClick={handleApplyFilters}>Aplicar Filtros</button>
      </div>
    </div>
  );
};

export default FilterBox;

