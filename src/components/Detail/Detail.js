import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getMovieDetail } from '../../action';
import './Detail.css';

const Detail = ({ movieDetail, getMovieDetail, match }) => {
  useEffect(() => {
    const matchId = match.params.id;
    getMovieDetail(matchId);
  }, []);

  return (
    <div className='detail'>
      <div className='infoDetail'>
        <h1>{movieDetail.Title}</h1>
        <h4>{movieDetail.Year}</h4>
        <span>Duration: {movieDetail.Runtime} ⏳</span>
        <p>{movieDetail.Plot}</p>
      </div>
      <img src={movieDetail.Poster} alt='post' className='imgDetail' />
    </div>
  );
};

const mapStateToProps = (state) => ({
  movieDetail: state.movieDetail,
});

export default connect(mapStateToProps, { getMovieDetail })(Detail);
