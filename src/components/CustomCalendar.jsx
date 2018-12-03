import React from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import BigCalendar from 'react-big-calendar'
import moment from 'moment'
import CustomWeek from 'components/CustomWeek';
import { userUpdate } from 'actions/index';

import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = BigCalendar.momentLocalizer(moment);

class CustomCalendar extends React.PureComponent {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
  };

  handleCalendarView = (v) => {
    const { dispatch, user } = this.props;
    const updateView = v === 'week' ? 2 : 1;
    dispatch(userUpdate(user.user, updateView));
  };

  render() {
    const { user } = this.props;
    return (
      <BigCalendar
        events={[]}
        localizer={localizer}
        defaultView={user.view}
        defaultDate={new Date(2018, 11, 1)}
        views={{ month: true, week: CustomWeek }}
        style={{ height: '580px', width: '100%' }}
        onView={v => this.handleCalendarView(v)}
      />
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return { user: state.user };
}

export default connect(mapStateToProps)(CustomCalendar);
