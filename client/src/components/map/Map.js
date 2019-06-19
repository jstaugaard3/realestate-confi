import React, { Fragment, useContext, useEffect, Component } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Spinner from '../layout/Spinner';
import BuildingContext from '../../context/building/buildingContext';
import GoogleMapReact from 'google-map-react';

const APIKEY = 'AIzaSyAnOJYO-oikKdLAOMM-wE2AUXuf-2Sr-iw';

const gotoBuildingPage = () => {
  console.log("CLICK IS WORKING");
}

const Map = () => {
  const buildingContext = useContext(BuildingContext);
  const { buildings, getBuildings, lat, lng, filtered_building} = buildingContext;

  const pinStyle = {
    // initially any map object has left top corner at lat lng coordinates
    // it's on you to set object origin to 0,0 coordinates
    position: 'absolute',
    width: 20,
    height: 20,
    left: -20 / 2,
    top: -20 / 2,
  
    border: '5px solid #f44336',
    borderRadius: 20,
    backgroundColor: 'white',
    textAlign: 'center',
    color: '#3f51b5',
    fontSize: 16,
    fontWeight: 'bold',
    padding: 4,
    cursor: 'pointer',
  };

  const BuildingPins = ({ text }) => <div style={pinStyle}>{''}</div>;

  const center = {
    lat: 39.9526,
    lng: -75.1652,
  };
  const zoom = 11;

  useEffect(() => {
    getBuildings();
    // eslint-disable-next-line
  }, []);
 
  return (

    // Important! Always set the container height explicitly
    <div>
      <div style={{ height: '50vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: APIKEY }}
          defaultCenter={center}
          defaultZoom={zoom}
          yesIWantToUseGoogleMapApiInternals
          // onGoogleApiLoaded={({ map, maps }) => apiIsLoaded(map, maps, places)}
        >
          {buildings !== null ? (
              ( filtered_building !== null
              ? filtered_building.map(building => (
            
            <BuildingPins lat={building.lat} lng={building.lng} key={building._id}
              key={building._id}
              onClick={gotoBuildingPage}
              />
              ))
          
          : buildings.map(building => (
              <BuildingPins lat={building.lat} lng={building.lng} 
              key={building._id}
              onClick={gotoBuildingPage}
              />
              
          )))
          ):null}              
        </GoogleMapReact>
      </div>
    </div>
  );
};

export default Map;
