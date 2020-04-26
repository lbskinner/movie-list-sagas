import React from "react";
import { connect } from "react-redux";
import DetailsGenreListItem from "../DetailsGenreListItem/DetailsGenreListItem";
import DetailsAddGenrePage from "../DetailsAddGenrePage/DetailsAddGenrePage";

class DetailsGenreList extends React.Component {
  render() {
    const genresArray = this.props.store.movieDetails[0].genres.map(
      (genre, index) => {
        return <DetailsGenreListItem key={index} genre={genre} />;
      }
    );
    return (
      <div>
        <p>Current Genre: </p>
        <ul>{genresArray}</ul>
        <DetailsAddGenrePage />
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(DetailsGenreList);
