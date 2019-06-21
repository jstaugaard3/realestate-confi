import React, { useContext } from 'react';
import BuildingContext from '../../context/building/buildingContext';

const BuildingItem = ({ building }) => {
  const buildingContext = useContext(BuildingContext);
  const { deleteBuilding, setCurrentBuilding, clearCurrentBuilding } = buildingContext;

  const { _id, street, city, state, lat, lng } = building;

  const onDelete = () => {
    deleteBuilding(_id);
    clearCurrentBuilding();
  };

  return (
    <div className='card bg-light'>
      <h3 className='text-primary text-left'><i className='fas fa-building' /> {street}, {city}, {state}</h3>
      <h4 className='text-primary text-left'><i className='fas fa-map-pin' /> {lat} {lng}</h4>
      <h4 className='text-primary text-left'><i className='fas fa-fingerprint' /> {_id} </h4>

      <p>
      <button className="btn btn-dark btn-sm" onClick={()=> setCurrentBuilding(building)}>Edit</button>
        <button className='btn btn-danger btn-sm' onClick={onDelete}>
          Delete
        </button>
      </p>
    </div>
  );
};


export default BuildingItem;
