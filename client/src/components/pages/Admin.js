import React, { useContext, useEffect } from 'react';
import Map from '../map/Map';
import ArticlesAdmin from '../articles/ArticlesAdmin';
import ArticleForm from '../articles/ArticleForm';
import ArticleFilter from '../articles/ArticleFilter';

import Buildings from '../buildings/Buildings';
import BuildingForm from '../buildings/BuildingForm';
import BuildingFilter from '../buildings/BuildingFilter';

import AuthContext from '../../context/auth/authContext';

const Admin = () => {
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

      {/* <div className='grid-2'>
        <div>
          <ArticleForm />
        </div> */}
        <div>
          <ArticleFilter />
          <ArticlesAdmin />
          <ArticleForm />
        </div>
        <div>
        <BuildingFilter />
          <Buildings />
          <BuildingForm />

        </div>
      {/* </div> */}
    
    
    
    </div>
  );
};

export default Admin;
