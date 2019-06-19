import React, { Fragment, useContext, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Spinner from '../layout/Spinner';
import BuildingItem from './BuildingItem.js';
import BuildingContext from '../../context/building/buildingContext';
import GoogleMapReact from 'google-map-react';




import AuthContext from '../../context/auth/authContext';

const APIKEY = 'AIzaSyAnOJYO-oikKdLAOMM-wE2AUXuf-2Sr-iw';

const options = {
  provider: 'google',
  apiKey: APIKEY};


const Map = () => {
  const buildingContext = useContext(BuildingContext);
  const { buildings, getBuildings, lat, lng, filtered_building} = buildingContext;

  const AnyReactComponent = ({ text }) => <div>{text}</div>;
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
          {/* {places.map(place => (
          <Marker
            key={place.id}
            text={place.name}
            lat={place.geometry.location.lat}
            lng={place.geometry.location.lng}
          />
        ))} */}
          {buildings !== null ? (
              ( filtered_building !== null
              ? filtered_building.map(building => (
            
            <AnyReactComponent lat={building.lat} lng={building.lng} text='X' />
              ))
          
          : buildings.map(building => (
              <AnyReactComponent lat={building.lat} lng={building.lng} text='X' />
          )))
          ):null}  
            
    

          {/* <AnyReactComponent lat={39.9526} lng={-75.1652} text='X' /> */}
        </GoogleMapReact>
      </div>
    </div>
  );
};

export default Map;
