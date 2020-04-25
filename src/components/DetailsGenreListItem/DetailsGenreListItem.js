import React from "react";
import { connect } from "react-redux";

class DetailsGenreListItem extends React.Component {
  handleDelete = (id) => (event) => {
    this.props.dispatch({ type: "DELETE_GENRE", payload: id });
  };
  render() {
    const genreId = this.props.genreId;
    return (
      <li>
        {this.props.genre}{" "}
        <button onClick={this.handleDelete(genreId)}>Delete</button>
      </li>
    );
  }
}

export default connect()(DetailsGenreListItem);
