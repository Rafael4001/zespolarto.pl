import React, { Component } from 'react';
import classNames from 'classnames';
import Typography from '@material-ui/core/Typography';


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

    function toggleDetails(item) {
      alert(item);
      this.setState((state, props) => {
        return {
          showDetails: !state.showDetails
        };
      });
    }

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
            {this.props.status === busy
              ?
              <div>
                <Typography
                  type={"p"}
                  className={classes.details}>hotel: {this.props.hotel}
                </Typography>
                <Typography
                  type={"p"}
                  className={classes.details}>adres: {this.props.address}
                </Typography>
              </div>
              : <div>WOLNE</div>
            }
            <Typography type={"p"} className={classes.details}>{this.props.description}</Typography>
          </div>
          <div>
            <Typography>
              {getView(this.props.status)}
            </Typography>
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
