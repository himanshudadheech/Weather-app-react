import React, { Component } from "react";

import PropTypes from "prop-types";

class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityName: "",
    };
    this.handleSearchInput = this.handleSearchInput.bind(this);
  }
  updateCityName(e) {
    this.setState({ cityName: e.target.value });
  }

  handleSearchInput() {
    this.props.searchCity(this.state.cityName);
  }
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <div className="d-flex container" style={{ width: "550px" }}>
          <input
            className="form-control me-2"
            placeholder="Enter City Name..."
            value={this.state.cityName}
            onChange={(e) => this.updateCityName(e)}
          />
          <button
            className="btn "
            style={{ backgroundColor: "indigo", color: "white" }}
            type="submit"
            onClick={this.handleSearchInput}
          >
            Search
          </button>
        </div>
      </div>
    );
  }
}
SearchBox.propTypes = {
  searchCity: PropTypes.func,
};
export default SearchBox;
