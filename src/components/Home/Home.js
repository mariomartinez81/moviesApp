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
    <>
      <div>
        <h1 className='title'>Movies App</h1>
        <input type='text' placeholder='Search movie' onChange={handleChange} />
        <button onClick={handleClick}>🏸</button>
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
    </>
  );
};

const mapStateToProps = (state) => ({
  moviesLoaded: state.moviesLoaded,
});

export default connect(mapStateToProps, { getMovies, addFavorites })(Home);
