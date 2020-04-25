import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class MovieList extends React.Component {
  seeDetails = (id) => (event) => {
    this.props.dispatch({ type: "GET_DETAILS", payload: id });
    this.props.history.push("/details");
  };
  render() {
    const movieId = this.props.movie.id;
    return (
      <div onClick={this.seeDetails(movieId)}>
        <img src={this.props.movie.poster} alt={this.props.movie.title} />
        <div>
          <h2>{this.props.movie.title}</h2>
          <p>{this.props.movie.description}</p>
        </div>
      </div>
    );
  }
}

export default withRouter(connect()(MovieList));
