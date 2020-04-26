import { takeEvery, put } from "redux-saga/effects";
import axios from "axios";

function* getMovies(action) {
  try {
    const response = yield axios.get("/movies");
    yield put({ type: "SET_MOVIES", payload: response.data });
  } catch (error) {
    console.log("GET ERROR: ", error);
  }
}

function* getMovieDetails(action) {
  try {
    const response = yield axios.get(`/movies/details/${action.payload}`);
    yield put({ type: "SET_DETAILS", payload: response.data });
  } catch (error) {
    console.log("GET MOVIE DETAILS ERROR: ", error);
  }
}

function* deleteGenre(action) {
  try {
    yield axios.delete(`/movies/genre/${action.payload}`);
    yield window.location.reload(true);
  } catch (error) {
    console.log("DELETE GENRE ERROR: ", error);
  }
}

function* addGenre(action) {
  try {
    yield axios.post("/movies/genre", action.payload);
    yield window.location.reload(true);
  } catch (error) {
    console.log("ADD GENRE ERROR: ", error);
  }
}

// Create the rootSaga generator function
function* rootSaga() {
  yield takeEvery("GET_MOVIES", getMovies);
  yield takeEvery("GET_DETAILS", getMovieDetails);
  yield takeEvery("DELETE_GENRE", deleteGenre);
  yield takeEvery("ADD_GENRE", addGenre);
}

export default rootSaga;
