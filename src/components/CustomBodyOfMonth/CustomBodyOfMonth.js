import React, { Component } from 'react';
import classNames from 'classnames';
import Typography from '@material-ui/core/Typography';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


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
          return (<div className={classes.infoBusy}>{place}</div>);
        case empty:
          return (<div className={classes.infoEmpty}>BRAK</div>);
        case holiday:
          return (<div className={classes.infoHoliday}>Wakacje</div>)
      }
    };

    function createData(date, place, fat, carbs, protein) {
      return {date, place, fat, carbs, protein};
    }

    const rows = [
      createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
      createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
      createData('Eclair', 262, 16.0, 24, 6.0),
      createData('Cupcake', 305, 3.7, 67, 4.3),
      createData('Gingerbread', 356, 16.0, 49, 3.9),
    ];


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
        {this.props.status === busy ?
          <div>
            <Typography type={"p"} className={classes.details}>hotel: {this.props.hotel}</Typography>
            <Typography type={"p"} className={classes.details}>adres: {this.props.address}</Typography>
          </div>
          : <div>WOLNE</div>}
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
          <div>
            <Typography type={"span"} className={classes.day}>{this.props.day}</Typography>
            {getDetails()}
            <Typography type={"p"} className={classes.details}>{this.props.description}</Typography>
          </div>
          <div className={classes.statusContainer}>
            {getView(this.props.status)}
          </div>
        </div>
        {this.props.children}
      </div>
    );
  }
}

CustomBodyOfMonth.defaultProps = {
  address: '',
  description: '',
  hotel: '',
  place: '',
};

CustomBodyOfMonth.displayName = 'CustomBodyOfMonth';

export default CustomBodyOfMonth;
