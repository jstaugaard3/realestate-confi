import React, { useContext, useRef, useEffect } from 'react';
import BuildingContext from '../../context/building/buildingContext';

const BuildingFilter = () => {
  const buildingContext = useContext(BuildingContext);
  const text = useRef('');

  const { filterBuildings, clearFilterBuilding, filtered_building } = buildingContext;

  useEffect(() => {
    if (filtered_building === null) {
      text.current.value = '';
    }
  });

  const onChange = e => {
    if (text.current.value !== '') {
      filterBuildings(e.target.value);
    } else {
      clearFilterBuilding();
    }
  };

  return (
    <form>
      <input
        ref={text}
        type='text'
        placeholder='Filter Buildings...'
        onChange={onChange}
      />
    </form>
  );
};

export default BuildingFilter;
