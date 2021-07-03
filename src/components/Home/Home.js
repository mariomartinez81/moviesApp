import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addFavorites, getMovies } from '../../action';
import { Link } from 'react-router-dom';
import '../Home/Home.css';

const Home = ({ getMovies, moviesLoaded, addFavorites }) => {
  const [input, setInput] = useState('');

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleClick = () => {
    getMovies(input);
  };

  return (
    <div className='total-render'>
      <div>
        <h1 className='title'>Movies App</h1>
        <div className='container-search-btn'>
          <input
            type='text'
            placeholder='Search movie'
            onChange={handleChange}
            className='search-movie'
          />
          <button onClick={handleClick} className='btn-search'>
            🏸
          </button>
        </div>
      </div>
      <div className='containersMovies'>
        {moviesLoaded.map((movie) => (
          <div key={movie.imdbID} className='posterMovie'>
            <div className='name-movie'>
              <span>{movie.Title}</span>
              <br />
              <span>{movie.Year}</span>
            </div>
            <Link to={`/movie/${movie.imdbID}`}>
              <img
                src={movie.Poster}
                alt='movie'
                width='70%'
                className='imgContainer'
              />
            </Link>

            <button
              className='btn-principal-card'
              onClick={() =>
                addFavorites({
                  title: movie.Title,
                  year: movie.Year,
                  poster: movie.Poster,
                  id: movie.imdbID,
                })
              }
            >
              🌟
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  moviesLoaded: state.moviesLoaded,
});

export default connect(mapStateToProps, { getMovies, addFavorites })(Home);
