import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import "./MovieListItem.css";

class MovieListItem extends React.Component {
  seeDetails = (id) => (event) => {
    // this.props.dispatch({ type: "GET_DETAILS", payload: id });

    this.props.history.push(`/details/${id}`);
  };
  render() {
    const movieId = this.props.movie.id;

    return (
      <div className="container" onClick={this.seeDetails(movieId)}>
        <div>
          <img src={this.props.movie.poster} alt={this.props.movie.title} />
        </div>
        <div className="box">
          <h2>{this.props.movie.title}</h2>
          <p>{this.props.movie.description}</p>
          <p>Genres: {this.props.movie.genres.join(", ")}</p>
        </div>
      </div>
    );
  }
}

export default withRouter(connect()(MovieListItem));
