import React from 'react';
import { NavLink } from 'react-router-dom';
import Buttton from '../Button/Button';
import imgMovies from '../../../public/movies.png';
import '../Nav/Nav.css';

const Nav = () => {
  return (
    <div className='nav'>
      <img src={imgMovies} alt='logo' width='70px' />
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
