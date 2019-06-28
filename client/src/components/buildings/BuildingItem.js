import React from 'react';
import { Link } from 'react-router-dom';

const BuildingItem = ({ building }) => {

  const { _id, street, city, state, lat, lng } = building;

  return (
    <div>
      <div className='col s12 m6'>
        <div className='card'>
  
            <div className='card-content'>
              <p className='black-text text-left'>
                <i className='fas fa-building' /> {street}, {city}, {state}
              </p>
              <p className='black-text text-left'>
                <i className='fas fa-map-pin' /> {lat} {lng}
              </p>
            </div>
            <div className='card-action'>
              <Link to={'/property/'.concat(_id)}>Building Page</Link>
            </div>
 
        </div>
      </div>
    </div>
  );
};

export default BuildingItem;
