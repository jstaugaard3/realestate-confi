import React, { useContext, useEffect } from 'react';
import Map from '../map/Map';
import ArticlesAdmin from '../articles/ArticlesAdmin';
import ArticleForm from '../articles/ArticleForm';
import ArticleFilter from '../articles/ArticleFilter';

import BuildingsAdmin from '../buildings/BuildingsAdmin';
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
      <div className='row'>
        <Map />
      </div>

      <div className='row'>
        <div className='col s12 m6'>
          <div>
            <ArticleForm />
            <ArticleFilter />

          </div>
        </div>

        <div className='col s12 m6'>
          <div>
            <BuildingForm />
            <BuildingFilter />
    
          </div>
        </div>
        </div>

        <div className='row'>
          <div className='col s12 m6'>
          <ArticlesAdmin />
          </div>
          <div className='col s12 m6'>
          <BuildingsAdmin />
          </div>
        </div>

  
    </div>
  );
};

export default Admin;
