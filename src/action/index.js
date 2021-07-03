export const GET_MOVIES = 'GET_MOVIES';
export const GET_DETAILS = 'GET_DETAILS';
export const ADD_FAVORITES = 'ADD_FAVORITES';
export const REMOVE_FAVORITES = 'REMOVE_FAVORITES';

export const getMovies = (title) => async (dispatch) => {
  try {
    const request = await fetch(
      `https://www.omdbapi.com/?apikey=20dac387&s=` + title
    );
    const data = await request.json();
    dispatch({
      type: GET_MOVIES,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getMovieDetail = (id) => async (dispatch) => {
  try {
    const request = await fetch(
      `https://www.omdbapi.com/?apikey=20dac387&i=` + id
    );
    const data = await request.json();
    dispatch({
      type: GET_DETAILS,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const addFavorites = (arg) => ({
  type: ADD_FAVORITES,
  payload: arg,
});

export const removeFavorite = (payload) => ({
  type: REMOVE_FAVORITES,
  payload,
});

export const mario = () => {};
