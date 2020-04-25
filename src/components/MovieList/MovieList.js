import React from "react";
import { connect } from "react-redux";
import MovieListItem from "../MovieListItem/MovieListItem";

class MovieList extends React.Component {
  componentDidMount() {
    this.props.dispatch({ type: "GET_MOVIES" });
  }
  render() {
    const moviesArray = this.props.store.movies.map((movie, index) => {
      return <MovieListItem movie={movie} key={index} />;
    });
    return <div>{moviesArray}</div>;
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(MovieList);
