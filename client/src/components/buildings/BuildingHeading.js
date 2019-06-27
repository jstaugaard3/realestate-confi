import React from 'react';

const BuildingHeading = ({ building }) => {

  const { street, city, state } = building;

  return (
    <div>
      <div className='col s12 m6'>
        <div className='card card-heading'>
    
              <h3 className='text-primary text-left blue-grey-text'>
                <i className='fas fa-building' /> {street}, {city}, {state}
              </h3>


        </div>
      </div>
    </div>
  );
};

export default BuildingHeading;
