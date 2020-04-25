import React from "react";
import { connect } from "react-redux";
import MovieList from "../MovieList/MovieList";

class HomePage extends React.Component {
  componentDidMount() {
    console.log("Component Did Mount to App");

    this.props.dispatch({ type: "GET_MOVIES" });
  }
  render() {
    const moviesArray = this.props.store.movies.map((movie, index) => {
      return <MovieList movie={movie} key={index} />;
    });
    return <div>{moviesArray}</div>;
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(HomePage);
