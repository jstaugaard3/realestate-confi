import React, { Fragment, useContext, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import BuildingItem from './BuildingItem';
import Spinner from '../layout/Spinner';
import BuildingContext from '../../context/building/buildingContext';

const Buildings = () => {
  const buildingContext = useContext(BuildingContext);

  const { buildings, filtered_building, getBuildings, loading } = buildingContext;

  useEffect(() => {
    getBuildings();
    // eslint-disable-next-line
  }, []);

  if (buildings !== null && buildings.length === 0 && !loading) {
    return <h4>Please add a building</h4>;
  }

  return (
    <Fragment>
      <div className="row">
      {buildings !== null && !loading ? (
        <TransitionGroup>
          {filtered_building !== null
            ? filtered_building.map(building => (
                <CSSTransition
                  key={building._id}
                  timeout={500}
                  classNames='item'
                >
                  <BuildingItem building={building} />
                </CSSTransition>
              ))
            : buildings.map(building => (
                <CSSTransition
                  key={building._id}
                  timeout={500}
                  classNames='item'
                >
                  <BuildingItem building={building} />
                </CSSTransition>
              ))}
        </TransitionGroup>
      ) : (
        <Spinner />
      )}
      </div>
    </Fragment>
  );
};

export default Buildings;
