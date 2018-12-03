import React from 'react';
import dates from 'date-arithmetic';
import BigCalendar from 'react-big-calendar';
import TimeGrid from 'react-big-calendar/lib/TimeGrid'

export default class CustomWeek extends React.Component {
  render() {
    const { date } = this.props;
    const range = CustomWeek.range(date);

    return <TimeGrid {...this.props} range={range} eventOffset={15} events={[]} />
  }
}

CustomWeek.range = date => {
  const start = date;
  const end = dates.add(start, 6, 'day');

  let current = start;
  const range = [];

  while (dates.lte(current, end, 'day')) {
    range.push(current);
    current = dates.add(current, 1, 'day')
  }

  return range
};

CustomWeek.title = date => (
  `My awesome week: ${date.toLocaleDateString()}`
);

CustomWeek.navigate = (date, action) => {
  switch (action) {
    case BigCalendar.Navigate.PREVIOUS:
      return dates.add(date, -7, 'day');

    case BigCalendar.Navigate.NEXT:
      return dates.add(date, 7, 'day');

    default:
      return date;
  }
};
