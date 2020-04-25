import React from "react";
import { connect } from "react-redux";

class MovieList extends React.Component {
  render() {
    return (
      <div>
        <img src={this.props.movie.poster} alt={this.props.movie.title} />
        <div>
          <h2>{this.props.movie.title}</h2>
          <p>{this.props.movie.description}</p>
        </div>
      </div>
    );
  }
}

export default connect()(MovieList);
