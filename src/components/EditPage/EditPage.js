import React from "react";
import { connect } from "react-redux";
import "./EditPage.css";

// trying to use class component to get the id this time
class EditPage extends React.Component {
  state = {
    // set the id to the id from the params
    // movieDetails: [...this.props.store.movieDetails],
    id: this.props.match.params.id,
    title: this.props.store.movieDetails[0].title,
    description: this.props.store.movieDetails[0].description,
  };

  componentDidMount() {
    this.props.dispatch({ type: "GET_DETAILS", payload: this.state.id });

    // if (this.props.store.movieDetails.length > 0) {
    //   this.setStateToReducer();
    // }
  }

  //   setStateToReducer() {
  //     this.setState({
  //       ...this.state,
  //       movieDetails: [...this.props.store.movieDetails],
  //     });
  //   }
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
        {this.props.store.movieDetails.length > 0 && (
          <div>
            <label>Title:</label>
            <br />
            <input
              type="text"
              defaultValue={this.state.title}
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
              defaultValue={this.state.description}
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
