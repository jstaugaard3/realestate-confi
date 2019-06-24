import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import BuildingContext from '../../context/building/buildingContext';

const BuildingHeading = ({ building }) => {
  const buildingContext = useContext(BuildingContext);
  const {
    deleteBuilding,
    setCurrentBuilding,
    clearCurrentBuilding,
  } = buildingContext;

  const { _id, street, city, state, lat, lng } = building;

  const onDelete = () => {
    deleteBuilding(_id);
    clearCurrentBuilding();
  };

  const gotoBuildingPage = e => {
    console.log(e.target.id);
    window.location = `/property/${e.target.id}`;
  };

  return (
    <div>
      <div className='col s12 m6'>
        <div className='card'>
    
              <h3 className='text-primary text-left blue-grey-text'>
                <i className='fas fa-building' /> {street}, {city}, {state}
              </h3>


        </div>
      </div>
    </div>
  );
};

export default BuildingHeading;
