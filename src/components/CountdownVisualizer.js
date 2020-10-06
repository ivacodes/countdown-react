import React, { Component } from "react";
import "fontsource-oxanium";
import styled from "styled-components";

const TimeContainer = styled.div`
  display: flex;
  flex-direction: row;
  font-family: Helvetica, sans-serif;
  width: 50%;
  justify-content: space-between;
`;

const NumberContainer = styled.span`
  font-family: Oxanium, cursive;
  font-size: 1.5em;
  background-color: black;
  padding: 15%;
`;

export default class CountdownVisualizer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeLeft: {},
    };
  }

  calculateTimeLeft = () => {
    const { endTime } = this.props;
    let difference = +new Date(endTime) - +new Date();
    console.log(difference);

    if (difference > 0) {
      this.setState({
        timeLeft: {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        },
      });
    } else {
      clearInterval(this.timer);
    }
  };

  componentDidMount() {
    this.timer = setInterval(this.calculateTimeLeft, 1000);
  }

  componentWillUnmount() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  render() {
    const { days, hours, minutes, seconds } = this.state.timeLeft;

    if (seconds === undefined) return null;

    return (
      <TimeContainer>
        <NumberContainer>
          {String(days).length < 2 ? `0${days}` : `${days}`}|
          {String(hours).length < 2 ? `0${hours}` : `${hours}`}|
          {String(minutes).length < 2 ? `0${minutes}` : `${minutes}`}|
          {String(seconds).length < 2 ? `0${seconds}` : `${seconds}`}
        </NumberContainer>
      </TimeContainer>
    );
  }
}
