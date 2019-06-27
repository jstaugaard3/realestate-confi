import React, { Fragment, useContext, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import AuthContext from '../../context/auth/authContext';
import Spinner from '../layout/Spinner';
import ArticleContext from '../../context/article/articleContext';
import ArticleItemBuilding from '../articles/ArticleItemBuilding';
import BuildingContext from '../../context/building/buildingContext';
import ArticleFilter from '../articles/ArticleFilter';

import GoogleMapReact from 'google-map-react';
const APIKEY = 'AIzaSyCaWDmX3JzF4wTq_lp6bNOP0WJZox3YXww';

const Property = props => {
  const authContext = useContext(AuthContext);
  const buildingContext = useContext(BuildingContext);
  const articleContext = useContext(ArticleContext);

  const { articles, filtered, loading, getBuildingArticles } = articleContext;
  const { buildings, getBuilding } = buildingContext;

  const pinStyle = {
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

  var center = {
    lat: 40.0793,
    lng: -75.3016,
  };

  const BuildingPins = props => (
    <div id={props.id} style={pinStyle}>
      {''}
    </div>
  );

  const zoom = 13;

  useEffect(() => {
    authContext.loadUser();
    getBuildingArticles(props.match.params.id);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    getBuilding(props.match.params.id);
    // eslint-disable-next-line
  }, []);

  return (
    // Return of object
    <div>
      <div className='row'>
      <Fragment>
        <div className='col s12 m6'>
            {buildings !== null && !loading ? (
              buildings.map(building => (
                <div className='card building-info'>
                  <h6>Street : {building.street}</h6>
                  <h6>
                    City / State : {building.city}, {building.state}
                  </h6>
                  <h6>
                    Building Notes : Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat.{' '}
                  </h6>
                </div>
              ))
            ) : (
              <Spinner />
            )}
        </div>
        </Fragment>


        <Fragment>
        <div className='col s12 m6'>
          <div className='card'>
            <div style={{ height: '36.5vh', width: '100%' }}>
              <GoogleMapReact
                bootstrapURLKeys={{ key: APIKEY }}
                defaultCenter={center}
                defaultZoom={zoom}
                yesIWantToUseGoogleMapApiInternals
                // onGoogleApiLoaded={({ map, maps }) => apiIsLoaded(map, maps, places)} 
                >
      
                  {buildings !== null && !loading ? (
                    buildings.map(building => (
                      <BuildingPins
                        lat={building.lat}
                        lng={building.lng}
                        key={building._id}
                        id={building._id}
                      />
                    ))
                  ) : (
                    <Spinner />
                  )}


              </GoogleMapReact>
            </div>
          </div>
        </div>
        </Fragment>
      </div>

      <div className='row'>
        <div className='col s12 m6'>
          
        <ArticleFilter />

          {articles !== null && !loading ? (
            <TransitionGroup>
            {filtered !== null
              ? filtered.map(article => (
                  <CSSTransition
                    key={article._id}
                    timeout={500}
                    classNames='item'>
                    <ArticleItemBuilding article={article} />
                  </CSSTransition>
                ))
              : articles.map(article => (
                  <CSSTransition
                    key={article._id}
                    timeout={500}
                    classNames='item'>
                    <ArticleItemBuilding article={article} />
                  </CSSTransition>
                ))}
          </TransitionGroup>
        ) : (
            <Spinner />
          )}
        </div>

        <div className='col s12 m6'>
          <div className='row'>
            <div className='col s12'>
              <h4 className="center">Coming Soon!  Building Forum</h4>
              <div className='card'>
                <div className='card-content card-forum grey black-text'>
                  <h6> SSmith: How much is costing to build this? </h6>
                  <h6> -> ARami: I heard $570 per sf</h6>
                  <h6> -> jism29: That is before budget overruns</h6>
                  <h6> MKidm: What tenat is going in the building? </h6>
                  <h6> -> ARami: They don't have anyone</h6>
                  <h6> -> jism29: Really????</h6>
                  <h6> User29: This project is going to lose money!!</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Property;
