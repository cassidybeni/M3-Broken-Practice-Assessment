import React, { Component } from "react";
import axios from "axios";

class Locations extends Component {
  constructor() {
    super();
    this.state = {
      locations: [],
      showList: false,
    };
  }

  getLocations = async () => {
    const { data } = await axios.get("https://pokeapi.co/api/v2/location");
    //console.log(data.results.map((loc) => loc.name));

    this.setState({
      locations: data.results.map((loc) => loc.name),
    });
  };

  handleClick = () => {
    this.getLocations()
    this.setState({
      showList: !this.state.showList,
    });
  };

  componentDidMount() {}

  render() {
    const { locations, showList } = this.state;
    const listItems = locations.map((loc, i) => <li key={i}>{loc}</li>);

    return (
      <div>
        <h1>List of Locations</h1>
        <button onClick={this.handleClick}>
          {showList ? "Hide Locations" : "Show Locations"}
        </button>

        <ul>{showList ? listItems : null}</ul>
      </div>
    );
  }
}

export default Locations;
