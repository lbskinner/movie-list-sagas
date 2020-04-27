import React from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";

class EditPageGenreListItem extends React.Component {
  state = {
    movieId: this.props.store.movieDetails[0].id,
    movieGenreId: "",
  };
  handleDelete = (id) => (event) => {
    this.setState(
      {
        ...this.state,
        movieGenreId: id,
      },
      () => {
        console.log(this.state);
        this.props.dispatch({ type: "DELETE_GENRE", payload: this.state });
      }
    );
    console.log("Genre_ID: ", id);
  };
  render() {
    const genreId = this.props.genre.movie_genre_id;
    return (
      <div>
        {this.props.genre.genre_name !== "N/A" && (
          <li>
            {this.props.genre.genre_name}
            <Button
              className="button-space"
              variant="contained"
              size="small"
              onClick={this.handleDelete(genreId)}
            >
              Delete
            </Button>
          </li>
        )}
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(EditPageGenreListItem);
