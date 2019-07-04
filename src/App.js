import React, { Component } from "react";
import "./App.css";
import { CardList } from "./Components/card-list";
import { SearchBox } from "./Components/searchbox/searchbox";

class App extends Component {
  constructor() {
    super();
    this.state = {
      names: [],
      findString: ""
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users").then(response =>
      response.json().then(users => this.setState({ names: users }))
    );
  }
  handleChange = e => {
    this.setState({ findString: e.target.value });
  };
  render() {
    const { names, findString } = this.state;
    const filteredNames = names.filter(iNames =>
      iNames.name.toLowerCase().includes(findString.toLowerCase())
    );
    return (
      <div className='App'>
        <h1>Monster Alive!</h1>
        <SearchBox
          placeholder='Find Users...'
          handleChange={this.handleChange}
        />
        <CardList name={filteredNames} />
      </div>
    );
  }
}

export default App;
