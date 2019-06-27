import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import BuildingContext from '../../context/building/buildingContext';

const BuildingItem = ({ building }) => {
  const buildingContext = useContext(BuildingContext);
  const {
    setCurrentBuilding,
  } = buildingContext;

  const { _id, street, city, state, lat, lng, deleteBuilding, clearCurrentBuilding } = building;

  const onDelete = () => {
    deleteBuilding(_id);
    clearCurrentBuilding();
  };

  return (
    <div>
      <div className='col s12 m6'>
        <div className='card'>
  
            <div className='card-content-admin'>
              <p className='black-text text-left'>
                <i className='fas fa-building' /> {street}
              </p>
                  {"  "} {city}, {state}
              <p>

              </p>

              <p className='black-text text-left'>
                <i className='fas fa-map-pin' /> {lat} {lng}
              </p>
              <p className='black-text text-left'>
                <i className='fas fa-fingerprint' /> {_id}{' '}
              </p>
            </div>
            <div className='card-action'>
              <Link to={'/property/'.concat(_id)}>Building Page</Link>
              <p>
                <button
                  className='btn yellow black-text'
                  onClick={() => setCurrentBuilding(building)}>
                  Edit
                </button>
                <button className='btn red' onClick={onDelete}>
                  Delete
                </button>
                </p>
            </div>
 
        </div>
      </div>
    </div>
  );
};

export default BuildingItem;
