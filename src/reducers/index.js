import {
  GET_MOVIES,
  GET_DETAILS,
  ADD_FAVORITES,
  REMOVE_FAVORITES,
} from '../action';

const initialState = {
  moviesLoaded: [],
  movieFavorite: [],
  movieDetail: {},
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_MOVIES:
      return {
        ...state, //
        moviesLoaded: [...action.payload.Search], // lo destructuro porque el Search es un array en donde viene las movies
      };

    case GET_DETAILS:
      return {
        ...state,
        movieDetail: action.payload,
      };
    case ADD_FAVORITES:
      return {
        ...state,
        movieFavorite: [...state.movieFavorite, action.payload],
      };
    case REMOVE_FAVORITES:
      return {
        ...state,
        movieFavorite: state.movieFavorite.filter(
          (movie) => movie.id !== action.payload
        ),
      };

    default:
      return state;
  }
}
