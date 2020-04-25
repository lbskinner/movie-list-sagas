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

// Create the rootSaga generator function
function* rootSaga() {
  yield takeEvery("GET_MOVIES", getMovies);
  yield takeEvery("GET_DETAILS", getMovieDetails);
}

export default rootSaga;
