import { takeEvery, put } from "redux-saga/effects";
import axios from "axios";

function* getMovies() {
  try {
    const response = yield axios.get("/movies");
    yield put({ type: "SET_MOVIES", payload: response.data });
  } catch (error) {
    console.log("GET SERVER ERROR: ", error);
  }
}

// Create the rootSaga generator function
function* rootSaga() {
  yield takeEvery("GET_MOVIES", getMovies);
}

export default rootSaga;
