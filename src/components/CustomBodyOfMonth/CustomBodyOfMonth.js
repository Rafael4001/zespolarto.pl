import React, { Component } from 'react';
import classNames from 'classnames';

import Typography from '@material-ui/core/Typography';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import EventBusyIcon from '@material-ui/icons/EventBusy';


const STATUS = {
  BUSY: "busy",
  EMPTY: "empty",
  RESERVATION: "reservation",
  HOLIDAY: "holiday",
  UNDEFINED: "undefined",
};


const empty = STATUS.EMPTY;
const busy = STATUS.BUSY;
const holiday = STATUS.HOLIDAY;


class CustomBodyOfMonth extends Component {
  state = {
    showDetails: this.props.showDetails //Tutaj jest do poprawy architektura TODO
  };

  render() {
    const {classes, place, status} = this.props;


    const classNameMain = classNames(classes.main, {
        [classes.busy]: status === STATUS.BUSY,
        [classes.holiday]: status === STATUS.HOLIDAY,
        [classes.emptyContainer]: status === STATUS.EMPTY || STATUS.UNDEFINED,
      }
    );

    const getView = (status) => {
      switch (status) {
        case busy:
          return (<div className={classNames(classes.info, classes.infoBusy,)}>{place}</div>);
        case empty:
          return (<div className={classNames(classes.info, classes.infoEmpty,)}>BRAK</div>);
        case holiday:
          return (<div className={classNames(classes.info, classes.infoHoliday,)}>Wakacje</div>)
      }
    };
    const getIcon = (status) => {
      switch (status) {
        case STATUS.BUSY:
          return <EventAvailableIcon classes={{root: classes.icon}}/>;
        case STATUS.EMPTY:
          return <CalendarTodayIcon classes={{root: classes.icon}}/>;
        case STATUS.HOLIDAY:
          return <EventBusyIcon classes={{root: classes.icon}}/>;
      }
    };


    function toggleDetails(item) {
      alert(item);
      this.setState((state, props) => {
        return {
          showDetails: !state.showDetails
        };
      });
    }

    const getDetails = () => (
      <div className={classes.rowInfo}>
        {this.props.status === busy &&
        <div>
          {this.props.hotel && <Typography type={"p"} className={classes.details}><strong>hotel: </strong>{this.props.hotel}</Typography>}
          {this.props.information &&
          <Typography type={"p"} className={classes.details}><strong>informacje dodatkowe: </strong>{this.props.information}</Typography>}
        </div>
        }
      </div>
    );

    return (
      <div
        className={classNameMain}
        // onClick={() => {
        //   toggleDetails(this.props.day)
        // }}
      >
        <div className={classes.rowContainer}>
          <div className={classes.detailsMainContainer}>
            <div className={classes.termIconContainer}>
              {getIcon(this.props.status)}
              <Typography type={"span"} className={classes.day}>{this.props.day}</Typography>
            </div>
            {getDetails()}
            <Typography type={"p"} className={classes.details}>{this.props.description}</Typography>
          </div>
          <div className={classes.statusContainer}>{getView(this.props.status)}</div>
        </div>
        {this.props.children}
      </div>
    );
  }
}

CustomBodyOfMonth.defaultProps = {
  description: '',
  hotel: '',
  place: '',
  information: '',
};

CustomBodyOfMonth.displayName = 'CustomBodyOfMonth';

export default CustomBodyOfMonth;
