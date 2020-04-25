import React from "react";
import { connect } from "react-redux";
import DetailsGenreListItem from "../DetailsGenreListItem/DetailsGenreListItem";

class DetailsGenreList extends React.Component {
  render() {
    const genresArray = this.props.store.movieDetails[0].genres.map(
      (genre, index) => {
        return (
          <DetailsGenreListItem key={index} genre={genre} genreId={genre.id} />
        );
      }
    );
    return <ul>{genresArray}</ul>;
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(DetailsGenreList);
