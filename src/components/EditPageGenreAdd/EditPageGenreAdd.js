import React from "react";
import { connect } from "react-redux";

class EditPageGenreAdd extends React.Component {
  state = {
    genre_id: 0,
    movie_id: this.props.store.movieDetails[0].id,
  };

  handleSelect = (event) => {
    this.setState(
      {
        ...this.state,
        genre_id: event.target.value,
      },
      () => {
        console.log(this.state);
      }
    );
  };

  addGenreToMovie = (event) => {
    this.props.dispatch({ type: "ADD_GENRE", payload: this.state });
  };
  render() {
    return (
      <div>
        <label htmlFor="genres">Select a Genre:</label>
        <br />
        <select id="genres" onChange={this.handleSelect}>
          <option value="">--Please choose an option--</option>
          <option value="1">Adventure</option>
          <option value="2">Animated</option>
          <option value="3"> Biographical</option>
          <option value="4">Comedy</option>
          <option value="5">Disaster</option>
          <option value="6">Drama</option>
          <option value="7">Epic</option>
          <option value="8">Fantasy</option>
          <option value="9">Musical</option>
          <option value="10">Romantic</option>
          <option value="11">Science Fiction</option>
          <option value="12">Space-Opera</option>
          <option value="13">Superhero</option>
        </select>{" "}
        <br />
        <button onClick={this.addGenreToMovie}>Add Genre</button>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(EditPageGenreAdd);
