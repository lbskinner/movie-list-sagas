import React from "react";
import { connect } from "react-redux";

class DetailsGenreListItem extends React.Component {
  render() {
    return <li>{this.props.genre.genre_name}</li>;
  }
}

export default connect()(DetailsGenreListItem);
