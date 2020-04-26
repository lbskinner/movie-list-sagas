import React from "react";
import { connect } from "react-redux";

class EditPageGenreListItem extends React.Component {
  handleDelete = (id) => (event) => {
    console.log("Genre_ID: ", id);
    this.props.dispatch({ type: "DELETE_GENRE", payload: id });
  };
  render() {
    const genreId = this.props.genre.movie_genre_id;
    return (
      <div>
        {this.props.genre.genre_name !== "N/A" && (
          <li>
            {this.props.genre.genre_name}
            <button onClick={this.handleDelete(genreId)}>Delete</button>
          </li>
        )}
      </div>
    );
  }
}

export default connect()(EditPageGenreListItem);
