import React from "react";
import { connect } from "react-redux";
import "./EditPage.css";
import EditPageGenre from "../EditPageGenre/EditPageGenre";

// trying to use class component to get the id this time
class EditPage extends React.Component {
  state = {
    title: "",
    description: "",
  };
  componentDidMount() {
    const id = this.props.match.params.id;
    console.log("matchPramasId: ", id);
    this.props.dispatch({ type: "GET_DETAILS", payload: id });
  }

  handleCancel = (event) => {
    this.props.history.goBack();
  };
  render() {
    return (
      <div>
        {this.props.store.movieDetails.length > 0 && (
          <div>
            <label>Title:</label>
            <br />
            <input
              type="text"
              defaultValue={this.props.store.movieDetails[0].title}
            />{" "}
            <br />
            <label htmlFor="description">Description:</label> <br />
            <textarea
              //   className="largeBox"
              id="description"
              type="text"
              rows="15"
              cols="75"
              defaultValue={this.props.store.movieDetails[0].description}
            ></textarea>
            <div>
              <button onClick={this.handleCancel}>Cancel Changes</button>
              <button>Save Changes</button>
            </div>
            <EditPageGenre />
          </div>
        )}
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(EditPage);
