import React, { Fragment, useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';
import ArticleContext from '../../context/article/articleContext';

const Navbar = ({ title, icon }) => {
  const authContext = useContext(AuthContext);
  const articleContext = useContext(ArticleContext);

  const { isAuthenticated, logout, user } = authContext;
  const { clearArticles } = articleContext;

  const onLogout = () => {
    logout();
    clearArticles();
  };

  const authLinks = (
    <Fragment>
      <li>Hello {user && user.name}</li>
      <li>
        <a onClick={onLogout} href='#!'>
          <i className='fas fa-sign-out-alt' />{' '}
          <span className='hide-sm'>Logout</span>
        </a>
      </li>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <li>
        <Link to='/register'>Register</Link>
      </li>
      <li>
        <Link to='/login'>Login</Link>
      </li>
    </Fragment>
  );

  return (

    <div className='navbar-fixed'>
      <nav>
        <div className='nav-wrapper blue-grey'>
          <span>{"  "}</span>
          <a href='/'>
            <i className={icon} />
            <span>{`  `}</span>Real Estate Confi
          </a>

          <ul id='nav-mobile' className='right'>
            {isAuthenticated ? authLinks : guestLinks}
          </ul>
        </div>
      </nav>
    </div>

  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

Navbar.defaultProps = {
  title: 'Real Estate Confi',
  icon: 'far fa-building',
};

export default Navbar;
