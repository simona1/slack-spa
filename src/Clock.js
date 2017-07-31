// @flow

import React from 'react';

const WEEKDAYS = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];

const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

type State = {
  date: Date,
}

class Clock extends React.Component {
  state: State;

  constructor(props: Object) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }

  componentDidMount() {
    setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval();
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    const weekday = this.state.date.getDay();
    const month = this.state.date.getMonth();
    const calendarDate = this.state.date.getDate();
    return (
      <div>
        <h1>{`${WEEKDAYS[weekday]}, ${MONTHS[month]} ${calendarDate}`}</h1>
        <h2>{this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}

export default Clock;
