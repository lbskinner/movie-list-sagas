import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import DetailsGenreList from "../DetailsGenreList/DetailsGenreList";

function DetailsPage({ dispatch, history, store }) {
  let { id } = useParams();
  console.log("paramsID: ", id);
  useEffect(() => {
    dispatch({ type: "GET_DETAILS", payload: id });
  }, [dispatch, id]);

  const backButtonClicked = (event) => {
    history.push("/");
    dispatch({ type: "CLEAR_DETAILS" });
  };

  const editButtonClicked = (event) => {
    history.push("/edit");
  };
  return (
    <div>
      {store.movieDetails.length > 0 && (
        <div>
          <div>
            <button onClick={backButtonClicked}>Back to List</button>
            <button onClick={editButtonClicked}>Edit</button>
          </div>
          <br />
          <img
            src={store.movieDetails[0].poster}
            alt={store.movieDetails[0].title}
          />
          <div>
            <h2>{store.movieDetails[0].title}</h2>
            <p>{store.movieDetails[0].description}</p>
            <DetailsGenreList />
          </div>
        </div>
      )}
    </div>
  );
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(DetailsPage);
