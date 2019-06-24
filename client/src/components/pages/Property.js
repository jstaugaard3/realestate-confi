import React, { Fragment, useContext, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import AuthContext from '../../context/auth/authContext';
import Spinner from '../layout/Spinner';
import ArticleContext from '../../context/article/articleContext';
import ArticleItemBuilding from '../articles/ArticleItemBuilding';
import BuildingContext from '../../context/building/buildingContext';
import BuildingHeading from '../buildings/BuildingHeading';


const Property = props => {
  const authContext = useContext(AuthContext);
  const buildingContext = useContext(BuildingContext);
  const articleContext = useContext(ArticleContext);

  const { articles, loading, getBuildingArticles } = articleContext;
  const { buildings, getBuildings, getBuilding, filterBuildings} = buildingContext;

  useEffect(() => {
    authContext.loadUser();
    getBuildingArticles(props.match.params.id);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    getBuilding(props.match.params.id);
    // getBuildings();

    // eslint-disable-next-line
    
  }, []);

  return (
    <div>
      <Fragment>   
        {buildings !== null && !loading ? (
          buildings.map(building => 
          (
          <BuildingHeading building={building} />
          )
          )
        ) : (
          <Spinner />
        )}
      </Fragment>

      <Fragment>
        <div className='row'>
          <div className='col s12 m6'>
            {articles !== null && !loading ? (
              articles.map(article => (
                <CSSTransition
                  key={article._id}
                  timeout={500}
                  classNames='item'>
                  <ArticleItemBuilding article={article} />
                </CSSTransition>
              ))
            ) : (
              <Spinner />
            )}
          </div>

          <div className='col s12 m6'>
            <div className='row'>
              <div className='col s12'>
                <div className='card'>
                  <div className='card-content card-forum grey black-text'>
                    <span className='card-title'>
                      Coming Soon! Property Forum
                    </span>
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
      </Fragment>
    </div>
  );
};
export default Property;
