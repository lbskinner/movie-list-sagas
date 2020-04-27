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
    this.props.dispatch({ type: "SAVE_DETAILS", payload: this.state });
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
            defaultValue={this.state.title}
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
            defaultValue={this.state.description}
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
