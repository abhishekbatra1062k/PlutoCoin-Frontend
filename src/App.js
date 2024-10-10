import React, { Component } from "react";
import "./styles.css";
import Status from "./components/status";
import Send from "./components/send";
import Transactions from "./components/transactions";
import axios from "axios";

const endpoint =
  "https://98490e0b-318e-43ac-9c0d-f6511655ffa3-00-38khhomaz77fq.pike.replit.dev:8000/mine_block";
class App extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    axios.get(endpoint);
  }
  render() {
    return (
      <div className="App">
        <Status />
        <Send />
        <Transactions />
      </div>
    );
  }
}

export default App;
