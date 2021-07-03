import React from 'react';
import { NavLink } from 'react-router-dom';
import Buttton from '../Button/Button';
import movies from '../../assets/movies.png';
import '../Nav/Nav.css';

const Nav = () => {
  return (
    <div className='nav'>
      <img src={movies} alt='logo' width='70px' className='img-nav' />
      <NavLink to='/' className='navRef'>
        <Buttton title={'Home 🏠'} />
      </NavLink>
      <NavLink to='/favs' className='navRef'>
        <Buttton title={'Favorites 🌟'} />
      </NavLink>
    </div>
  );
};

export default Nav;
