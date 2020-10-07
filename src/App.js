import React, { Component } from "react";
// import DateTimePicker from "./components/DateTimePicker";
import CountdownVisualizer from "./components/CountdownVisualizer";
import "./App.css";

export default class App extends Component {
  state = {
    endTime: "2020-11-19T00:01",
  };

  getEndTime = (endTime) => {
    console.log("getting time", endTime);
    this.setState({
      endTime,
    });
  };

  render() {
    const { endTime } = this.state;
    return (
      <div className='app'>
        <img src='/img/CP2077.png' alt='Cyberpunk 2077 logo' />
        {/* <div className='input-container'>
          <DateTimePicker getEndTime={this.getEndTime} />
        </div> */}
        <div>{endTime && <CountdownVisualizer endTime={endTime} />}</div>
      </div>
    );
  }
}
