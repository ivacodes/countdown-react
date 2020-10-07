import React, { Component } from "react";
import "fontsource-oxanium";
import styled from "styled-components";

const TimeContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-family: Oxanium, cursive;
  font-size: 7em;
  width: 100%;
  background-color: black;
  color: #53c0df;
  border: solid;
  border-color: #ffef00;
  border-radius: 5px;
  padding: 1%;

  @media screen and (max-width: 830px) {
    font-size: 4em;
  }
  @media screen and (max-width: 400px) {
    font-size: 2em;
  }
`;

const NumberContainer = styled.div``;

const LetterContainer = styled.div`
  display: flex;
  align-self: center;
  justify-content: space-around;
  font-size: 0.2em;
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
          {String(days).length < 2 ? `0${days}` : `${days}`}
          <LetterContainer>D</LetterContainer>
        </NumberContainer>
        |
        <NumberContainer>
          {String(hours).length < 2 ? `0${hours}` : `${hours}`}
          <LetterContainer>H</LetterContainer>
        </NumberContainer>
        |
        <NumberContainer>
          {String(minutes).length < 2 ? `0${minutes}` : `${minutes}`}
          <LetterContainer>M</LetterContainer>
        </NumberContainer>
        |
        <NumberContainer>
          {String(seconds).length < 2 ? `0${seconds}` : `${seconds}`}
          <LetterContainer>S</LetterContainer>
        </NumberContainer>
      </TimeContainer>
    );
  }
}
