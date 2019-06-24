import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import BuildingContext from '../../context/building/buildingContext';



const BuildingItem = ({ building }) => {

  const buildingContext = useContext(BuildingContext);
  const { deleteBuilding, setCurrentBuilding, clearCurrentBuilding } = buildingContext;

  const { _id, street, city, state, lat, lng } = building;

  const onDelete = () => {
    deleteBuilding(_id);
    clearCurrentBuilding();
  };

  const gotoBuildingPage = (e) => {
    console.log(e.target.id);
    window.location = `/property/${e.target.id}`;

  }



  return (

    <div>



<div className="col s12 m6">
    <div className="card horizontal">
      <div className="card-stacked">
        <div className="card-content">
        <p className='text-primary text-left'><i className='fas fa-building' /> {street}, {city}, {state}</p>
      <p className='text-primary text-left'><i className='fas fa-map-pin' /> {lat} {lng}</p>
      <p className='text-primary text-left'><i className='fas fa-fingerprint' /> {_id} </p>
        </div>
        <div className="card-action">
          <Link to={ "/property/".concat(_id)  }>Building Page</Link>
          <p>
      <button className="btn btn-dark btn-sm" onClick={()=> setCurrentBuilding(building)}>Edit</button>
        <button className='btn btn-danger btn-sm' onClick={onDelete}>
          Delete
        </button>
      </p>
        </div>
      </div>
    </div>
  </div>
    </div>
  );
};


export default BuildingItem;
