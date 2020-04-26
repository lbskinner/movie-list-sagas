import React from "react";
import { connect } from "react-redux";
import EditPageGenreListItem from "../EditPageGenreListItem/EditPageGenreListItem";

class EditPageGenre extends React.Component {
  render() {
    const genresArray = this.props.store.movieDetails[0].genres.map(
      (genre, index) => {
        return <EditPageGenreListItem key={index} genre={genre} />;
      }
    );
    return (
      <div>
        <p>Current Genre: </p>
        <ul>{genresArray}</ul>
        <label htmlFor="genres">Select a Genre:</label>
        <br />
        <select id="genres">
          <option value="">--Please choose an option--</option>
          <option value="Adventure">Adventure</option>
          <option value="Animated">Animated</option>
          <option value="Biographical"> Biographical</option>
          <option value="Comedy">Comedy</option>
          <option value="Disaster">Disaster</option>
          <option value="Drama">Drama</option>
          <option value="Epic">Epic</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Musical">Musical</option>
          <option value="Romantic">Romantic</option>
          <option value="Science Fiction">Science Fiction</option>
          <option value="Space-Opera">Space-Opera</option>
          <option value="Superhero">Superhero</option>
        </select>{" "}
        <br />
        <button>Add Genre</button>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(EditPageGenre);
