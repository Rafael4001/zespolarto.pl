import React, { Component } from 'react';
import classNames from 'classnames';

import Typography from '@material-ui/core/Typography';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import EventBusyIcon from '@material-ui/icons/EventBusy';


import {STATUS} from '../../../src/constants'

class CustomBodyOfMonth extends Component {
  state = {
    showDetails: this.props.showDetails //Tutaj jest do poprawy architektura TODO
  };

  render() {
    const {
      classes,
      place,
      status,
      day,
      description,
    } = this.props;


    const classNameMain = classNames(classes.main, {
        [classes.busy]: status === STATUS.BUSY,
        [classes.holiday]: status === STATUS.HOLIDAY,
        [classes.emptyContainer]: status === STATUS.EMPTY || STATUS.UNDEFINED,
      }
    );

    const getView = (status) => {
      switch (status) {
        case STATUS.BUSY:
          return (<div className={classNames(classes.info, classes.infoBusy,)}>{place}</div>);
        case STATUS.BUSY:
          return (<div className={classNames(classes.info, classes.infoEmpty,)}>BRAK</div>);
        case STATUS.HOLIDAY:
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

    const getDetails = () => (
      <div className={classes.rowInfo}>
        {(this.props.status === STATUS.BUSY || this.props.status === STATUS.HOLIDAY) &&
        <div>
          {this.props.hotel && <Typography type={"p"} className={classes.details}><strong>hotel: </strong>{this.props.hotel}</Typography>}
          {this.props.information &&
          <Typography type={"p"} className={classes.details}><strong>informacje dodatkowe: </strong>{this.props.information}</Typography>}
        </div>
        }
      </div>
    );

    return (
      <div className={classNameMain}>
        <div className={classes.rowContainer}>
          <div className={classes.detailsMainContainer}>
            <div className={classes.termIconContainer}>
              {getIcon(this.props.status)}
              <Typography type={"span"} className={classes.day}>{day}</Typography>
            </div>
            {getDetails()}
            <Typography type={"p"} className={classes.details}>{description}</Typography>
          </div>
          <div className={classes.statusContainer}>{getView(status)}</div>
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
