import React, { useContext, useEffect } from 'react';
import Map from '../map/Map';
import Articles from '../articles/Articles';
import ArticleFilter from '../articles/ArticleFilter';
import Buildings from '../buildings/Buildings';
import BuildingFilter from '../buildings/BuildingFilter';

import AuthContext from '../../context/auth/authContext';

const Landing = () => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <div className='grid-1'>
        <Map />
      </div>

        <div>
          <ArticleFilter />
          <Articles />
        </div>
        <div>
        <BuildingFilter />
          <Buildings />
        </div>    
    </div>
  );
};

export default Landing;
