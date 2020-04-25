import React from "react";
import { connect } from "react-redux";

class DetailsPage extends React.Component {
  render() {
    return <div>Movie Details</div>;
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(DetailsPage);
