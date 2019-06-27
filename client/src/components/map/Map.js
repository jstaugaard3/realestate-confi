import React, { useContext, useEffect } from 'react';
import BuildingContext from '../../context/building/buildingContext';
import GoogleMapReact from 'google-map-react';

const APIKEY = 'AIzaSyCaWDmX3JzF4wTq_lp6bNOP0WJZox3YXww';

const Map = () => {

  const gotoBuildingPage = (e) => {
    console.log(e.target.id);
    window.location = `/property/${e.target.id}`;

  }

  const buildingContext = useContext(BuildingContext);
  const { buildings, getBuildings, filtered_building} = buildingContext;

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

  const BuildingPins = (props ) => <div id={props.id} style={pinStyle} onClick={gotoBuildingPage}>{''}</div>;

  const center = {
    lat: 40.0793,
    lng: -75.3016,
  };
  const zoom = 14;

  useEffect(() => {
    getBuildings();
    // eslint-disable-next-line
  }, []);
 
  return (

    // Important! Always set the container height explicitly
    <div className="row mapClass">
      <div className="card">
      
      <div style={{ height: '40vh', width: '100%' }}>
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
            
            <BuildingPins lat={building.lat} lng={building.lng}
              key={building._id}
              />
              ))
          
          : buildings.map(building => (
              <BuildingPins lat={building.lat} lng={building.lng} 
              key={building._id} id={building._id}
              />
              
          )))
          ):null}              
        </GoogleMapReact>
      </div>
      </div>
    </div>
  );
};

export default Map;
