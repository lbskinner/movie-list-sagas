import React from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";

// trying to use class component to get the id this time
class EditPage extends React.Component {
  state = {
    // set the id to the id from the params
    id: this.props.match.params.id,
    title: this.props.store.movieDetails[0].title,
    description: this.props.store.movieDetails[0].description,
  };

  componentDidMount() {
    this.props.dispatch({ type: "GET_DETAILS", payload: this.state.id });
  }

  handleCancel = (event) => {
    // could use push, but used goBack() to see how it works
    this.props.history.goBack();
  };

  handleInputChange = (event, propertyKey) => {
    this.setState({
      ...this.state,
      [propertyKey]: event.target.value,
    });
  };

  handleSave = (event) => {
    // when defaultValue is set to values in reducers, it's for display only
    // if no changes are made, then there is no value being captured by state
    // do a check to see if state has value, if it doesn't, set it to the values in reducers to capture the no change of state
    let saveObject = {
      ...this.state,
    };
    if (this.state.title == null || this.state.title == "") {
      saveObject.title = this.props.store.movieDetails[0].title;
    }
    if (this.state.description == null || this.state.description == "") {
      saveObject.description = this.props.store.movieDetails[0].description;
    }
    this.props.dispatch({ type: "SAVE_DETAILS", payload: saveObject });
    this.props.history.push(`/details/${this.state.id}`);
  };
  render() {
    return (
      <div>
        <div>
          <br />
          <label>Title:</label>
          <br />
          <input
            type="text"
            style={{ fontSize: "1rem" }}
            // cannot use value because it wont let you edit input, set defaultValues in reducers so the information displays on reload
            defaultValue={this.props.store.movieDetails[0].title}
            onChange={(event) => this.handleInputChange(event, "title")}
          />{" "}
          <br />
          <label htmlFor="description">Description:</label> <br />
          <textarea
            id="description"
            type="text"
            rows="15"
            cols="75"
            style={{ fontSize: "1rem" }}
            // cannot use value because it wont let you edit input, set defaultValues in reducers so the information displays on reload
            defaultValue={this.props.store.movieDetails[0].description}
            onChange={(event) => this.handleInputChange(event, "description")}
          ></textarea>
          <div>
            <Button
              className="button-space"
              variant="contained"
              size="small"
              onClick={this.handleCancel}
            >
              Cancel Changes
            </Button>
            <Button
              className="button-space"
              variant="contained"
              size="small"
              onClick={this.handleSave}
            >
              Save Changes
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(EditPage);
