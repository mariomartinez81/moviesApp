import React from 'react';
import { connect } from 'react-redux';
import { removeFavorite } from '../../action';
import './Favorites.css';

const Favorites = ({ movieFavorite, removeFavorite }) => {
  return (
    <>
      <div className='containerFav'>
        {movieFavorite.map((movie) => (
          <div className='favorites' key={movie.id}>
            <div className='name-fav'>
              <span>{movie.title}</span>
              <span>{movie.year}</span>
            </div>
            <img src={movie.poster} alt='post' className='imgPoster' />
            <button
              className='btn-eraser'
              onClick={() => removeFavorite(movie.id)}
            >
              ❌
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  movieFavorite: state.movieFavorite,
});

export default connect(mapStateToProps, { removeFavorite })(Favorites);
