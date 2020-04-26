import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

// trying to use class component to get the id this time
class EditPage extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    console.log("matchPramasId: ", id);
  }
  render() {
    return <div>Edit Page</div>;
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(EditPage);
