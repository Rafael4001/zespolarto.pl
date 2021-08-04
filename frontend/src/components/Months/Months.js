import React from 'react';
import CustomBodyOfMonth from "../CustomBodyOfMonth";
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import {Typography} from "@material-ui/core";
import styled from 'styled-components'
import {STATUS} from '../../constants'


const howMuchTermsWithStatus = (element, status) => {
  return element.status === status;
};

const Months = ({className, table, weddingAmount}) => {
  const MonthsDays = ({days}) => (
    days.map((day) => <CustomBodyOfMonth key={day.day} {...day} />)
  );

  const getMonths = (months) => (
    months.map((month, id) => {
      const weddingsAmountInMonth = month.days.filter((element) => {
        return howMuchTermsWithStatus(element, STATUS.BUSY)
      });

      const MonthHead = () => (
        <div className="monthNameContainer">
          <Typography className="monthNumber">{id + 1} </Typography>
          <CalendarViewDayIcon classes={{root: "icon"}}/>
          <Typography className="monthName">{month.name} </Typography>
          <Typography className="weddingsAmount"> ({weddingsAmountInMonth.length})</Typography>
        </div>
      )


      return (
        <li key={month.name} className="dayContainer">
          <MonthHead/>
          <MonthsDays days={month.days}/>
        </li>
      )
    })
  );

  return (
    <div className={className}>
      <div className="monthAmountContainer">Ilość wesel: {weddingAmount}</div>
      <ul className="listClass">
        {getMonths(table)}
      </ul>
    </div>
  )
};

Months.defaultProps = {
  weddingAmount: 0,
};

Months.displayName = 'Months';


const StyledMonths = styled(Months)`
  .monthNameContainer {
    display: flex;
    align-items: baseline;
    background-color: #c6c6c6;
  }

  .listClass {
    padding: 0 0.5rem;
  }

  .monthName {
    font-size: 2rem
  }

  .monthAmountContainer {
    margin: 1.5rem 1rem 1rem 2.5rem;
  }

  .monthNumber {
    font-size: 2rem;
    margin-left: 1rem;
    color: #FFF;
  }

  .weddingsAmount {
    font-size: 1rem;
    color: #56595c;
    margin-left: 0.5rem;
  }

  .dayContainer {
    margin-top: 1rem;
    list-style: none;
  }

  .icon {
    margin: 0 1rem;
  }

,`


export default StyledMonths;

