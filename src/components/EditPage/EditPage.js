import React from "react";
import { connect } from "react-redux";
import "./EditPage.css";

// trying to use class component to get the id this time
class EditPage extends React.Component {
  state = {
    // set the id to the id from the params
    id: this.props.match.params.id,
    title: "",
    description: "",
  };
  componentDidMount() {
    this.props.dispatch({ type: "GET_DETAILS", payload: this.state.id });
  }

  handleCancel = (event) => {
    // could use push, but used goBack() to see how it works
    this.props.history.goBack();
  };

  handleInputChange = (event, propertyKey) => {
    this.setState(
      {
        ...this.state,
        [propertyKey]: event.target.value,
      },
      () => {
        console.log(this.state);
      }
    );
  };

  handleSave = (event) => {
    this.props.dispatch({ type: "SAVE_DETAILS", payload: this.state });
    this.props.history.push(`/details/${this.state.id}`);
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
              onChange={(event) => this.handleInputChange(event, "title")}
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
              onChange={(event) => this.handleInputChange(event, "description")}
            ></textarea>
            <div>
              <button onClick={this.handleCancel}>Cancel Changes</button>
              <button onClick={this.handleSave}>Save Changes</button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(EditPage);
