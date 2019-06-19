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
      <h3 className='text-primary text-left'>{street}</h3>

      <div className='grid-2'>
        <div>
          <ul className='list'>
            {city && (
              <li>
                <i className='fas fa-newspaper' /> {city}
              </li>
            )}

            {state && (
              <li>
                <i className='fas fa-map-pin' /> {state}
              </li>
            )}

          </ul>
        </div>

        <div>
          <ul className='list'>
            {lat && (
              <li>
                <i className='fas fa-link' /> {lat}
              </li>
            )}

            {lng && (
          <li>
            <i className='fas fa-clock' /> {lng}
          </li>
        )}


          </ul>
        </div>
      </div>

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
