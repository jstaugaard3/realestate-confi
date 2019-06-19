import React, { useState, useContext, useEffect } from 'react';
import BuildingContext from '../../context/building/buildingContext';

const BuildingForm = () => {
  const buildingContext = useContext(BuildingContext);

  const { addBuilding, updateBuilding, clearCurrentBuilding, current_building } = buildingContext;

  useEffect(() => {
    if (current_building !== null) {
      setBuilding(current_building);
    } else {
      setBuilding({
        street: '',
        city: '',
        state: '',
        lat: '',
        lng: ''
      });
    }
  }, [buildingContext, current_building]);

  const [building, setBuilding] = useState({
    street: '',
    city: '',
    state: '',
    lat: '',
    lng: ''
  });



  const { street, city, state, lat, lng } = building;

  const onChange = e =>
    setBuilding({ ...building, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (current_building === null) {
      addBuilding(building);
    } else {
      updateBuilding(building);
    }
    clearAll();
  };

  const clearAll = () => {
    clearCurrentBuilding();
  };

  return (
    <form onSubmit={onSubmit}>
      <h2 className='text-primary'>
        {current_building ? 'Edit Building' : 'Add Building'}
      </h2>
      <input
        type='text'
        placeholder='Street'
        name='street'
        value={street}
        onChange={onChange}
      />
      <input
        type='text'
        placeholder='City'
        name='city'
        value={city}
        onChange={onChange}
      />
      <input
        type='text'
        placeholder='State'
        name='state'
        value={state}
        onChange={onChange}
      />
      <input
        type='text'
        placeholder='Lat'
        name='lat'
        value={lat}
        onChange={onChange}
      />
      <input
        type='text'
        placeholder='Lng'
        name='lng'
        value={lng}
        onChange={onChange}
      />

      <div>
        <input
          type='submit'
          value={current_building ? 'Update Building' : 'Add Building'}
          className='btn btn-primary btn-block'
        />
      </div>
      {current_building && (
        <div>
          <button className='btn btn-light btn-block' onClick={clearAll}>
            Clear
          </button>
        </div>
      )}
    </form>
  );
};

export default BuildingForm;
