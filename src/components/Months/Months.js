import React from 'react';
import CustomBodyOfMonth from "../CustomBodyOfMonth";
import { Typography } from "@material-ui/core";


const Months = (props) => {
  const {classes, table} = props;

  const getMonthsDays = (days) => (
    days.map((day) => <CustomBodyOfMonth key={day.day} {...day} />)
  );

  const getMonths = (months) => (
    months.map((month) => (
      <li key={month.id} className={classes.dayContainer}>
        <Typography className={classes.monthName}>{month.name}</Typography>
        {getMonthsDays(month.days)}
      </li>
    ))
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

