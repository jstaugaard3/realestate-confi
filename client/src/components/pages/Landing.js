import React, { useContext, useEffect } from 'react';
import Map from '../map/Map';
import Articles from '../articles/Articles';
import ArticleForm from '../articles/ArticleForm';
import ArticleFilter from '../articles/ArticleFilter';
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

      {/* <div className='grid-2'>
        <div>
          <ArticleForm />
        </div> */}
        <div>
          <ArticleFilter />
          <Articles />
        </div>
      {/* </div> */}
    
    
    
    </div>
  );
};

export default Landing;
