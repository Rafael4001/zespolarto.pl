import React from 'react';
import CustomBodyOfMonth from "../CustomBodyOfMonth";
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';

import { Typography } from "@material-ui/core";


import { STATUS } from '../../constants'


const howMuchTermsWithStatus = (element, status) => {
  return element.status === status;
};

const Months = (props) => {
  const {classes, table} = props;

  const getMonthsDays = (days) => (
    days.map((day) => <CustomBodyOfMonth key={day.day} {...day} />)
  );

  const getMonths = (months) => (
    months.map((month, id) => {
      const weddingsAmount = month.days.filter(function(element) {
        return howMuchTermsWithStatus(element, STATUS.BUSY)
      });

      return (
        <li key={month.name} className={classes.dayContainer}>
          <div className={classes.monthNameContainer}>
            <Typography className={classes.monthNumber}>{id + 1} </Typography>
            <CalendarViewDayIcon classes={{root: classes.icon}}/>
            <Typography className={classes.monthName}>{month.name} </Typography>
            <Typography className={classes.weddingsAmount}> ({weddingsAmount.length})</Typography>
          </div>
          {getMonthsDays(month.days)}
        </li>

      )
    })
  );

  return (
    <ul className={classes.monthContainer}>
      {getMonths(table)}
    </ul>
  )
};

Months.defaultProps = {};

Months.displayName = 'Months';


export default Months;

