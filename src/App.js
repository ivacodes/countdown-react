import React, { Component } from "react";
import DateTimePicker from "./components/DateTimePicker";
import CountdownVisualizer from "./components/CountdownVisualizer";
import "./App.css";

export default class App extends Component {
  state = {
    endTime: undefined,
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
