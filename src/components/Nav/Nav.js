import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Nav/Nav.css';

const Nav = () => {
  return (
    <div className='nav'>
      <img
        src='https://cdn.worldvectorlogo.com/logos/movie-city-1.svg'
        alt='logo'
        width='70px'
      />
      <NavLink to='/' className='navRef'>
        Home 🏠
      </NavLink>
      <NavLink to='/favs' className='navRef'>
        Favorites 🌟
      </NavLink>
    </div>
  );
};

export default Nav;
