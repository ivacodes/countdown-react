import React, { Component } from "react";
import DateTimePicker from "./components/DateTimePicker";
import CountdownVisualizer from "./components/CountdownVisualizer";
import "./App.css";

export default class App extends Component {
  state = {
    endTime: "",
    // to set initial time, use 2021-11-19T00:01 format
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
        {/* <img src='/img/CP2077.png' alt='Cyberpunk 2077 logo' /> */}
        <div className='input-container'>
          <DateTimePicker getEndTime={this.getEndTime} />
        </div>
        <div className='countdown-container'>
          {endTime && <CountdownVisualizer endTime={endTime} />}
        </div>
      </div>
    );
  }
}
