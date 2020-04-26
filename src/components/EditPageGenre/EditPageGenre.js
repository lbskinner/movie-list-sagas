import React from "react";
import { connect } from "react-redux";
import EditPageGenreListItem from "../EditPageGenreListItem/EditPageGenreListItem";
import EditPageGenreAdd from "../EditPageGenreAdd/EditPageGenreAdd";

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
        <EditPageGenreAdd />
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(EditPageGenre);
