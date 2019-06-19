import React, { useContext } from 'react';
import BuildingContext from '../../context/building/buildingContext';
import Geocode from 'react-geocode';
import GoogleMapReact from 'google-map-react';

const APIKEY = 'AIzaSyAnOJYO-oikKdLAOMM-wE2AUXuf-2Sr-iw';

Geocode.setApiKey(APIKEY);
Geocode.enableDebug();

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const BuildingItem = ({ building }) => {
  const buildingContext = useContext(BuildingContext);
  const {} = buildingContext;
  const { _id, street, city, state } = building;

  
  Geocode.fromAddress(street + ', ' + city + ',' + state).then(
    response => {
      // const { lat, lng } = response.results[0].geometry.location;
      // console.log(city + ' ' + lat, lng);
      console.log(response);
    },
    error => {
      console.error(error);
    },
  );


  return (
    <div key={_id}>


      {/* <AnyReactComponent lat={39.9526} lng={-75.1652} text='My Marker' />1 */}
    </div>
  );
};

export default BuildingItem;
