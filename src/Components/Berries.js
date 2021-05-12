import React, { Component } from "react";
import axios from "axios";
import BerryCard from "./BerryCard";

class Berries extends Component {
  constructor() {
    super();
    this.state = {
      berries: [],
      selectedValue: "",
      currentBerry: {},
    };
  }

  handleChange = async (e) => {
    this.setState({
      selectedValue: e.target.value,
    });
    
    try {
      const { data } = await axios.get(
        `https://pokeapi.co/api/v2/berry/${e.target.value}`
      );

      if(this.state.selectedValue !== ""){
        const firmness = data.firmness.name
        const name = this.state.selectedValue
  
        this.setState({
         currentBerry: {name, firmness},
        });
      } else {
      this.setState({ 
        selectedValue: "",
        currentBerry: {}
      })
    }
    } catch (error) {
      alert(`error occured: ${error.message}`)
    }
     
  };

  getBerries = async () => {
    const { data } = await axios.get("https://pokeapi.co/api/v2/berry/");
    this.setState({ berries: data.results });
  };

  componentDidMount() {
    this.getBerries();
  }

  render() {
    const { berries, selectedValue, currentBerry } = this.state;
    const options = berries.map((berry, i) => {
      return (
        <option key={i} value={berry.name}>
          {berry.name}
        </option>
      );
    });
    return (
      <div>
        <h1>Select a Type</h1>
        <select onChange={this.handleChange} value={selectedValue}>
          <option></option>
          {options}
        </select>
        <BerryCard berry={currentBerry} />
      </div>
    );
  }
}

export default Berries;
