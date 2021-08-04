import styled from 'styled-components'
import React, {useState} from "react";
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import {STATUS, WEEKDAYS_SHORT, MONTHS, FIRST_DAY_OF_WEEK, MORE} from "../../../constants";
import classNames from 'classnames';
import {COLORS} from "../../../colors";
import moment from "moment";
import Popover from '@material-ui/core/Popover';
import DetailsOfTerm from '../DetailsOfTerm'
// import Image from "next/image";


const MonthView = ({className, year, month, index}) => {
  const [anchorEl, setAnchorEl] = useState(null)
  const [currentDay, setCurrentDay] = useState({})
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;


  const busyTerms = month.days.filter(item => item.status === STATUS.BUSY).map(item => item.day).map(item => new Date(item));
  const holidays = month.days.filter(item => item.status === STATUS.HOLIDAY).map(item => item.day).map(item => new Date(item))

  const modifiers = {
    busy: busyTerms,
    holidays
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const renderDay = (day) => {
    const currentDay = month.days.find(item => moment(item.day).format('YYYY-MM-DD') === moment(day).format('YYYY-MM-DD'))
    const handleDayClick = (event) => {
      setCurrentDay(currentDay)
      setAnchorEl(event.currentTarget);
    }

    return (
      <div
        className={classNames(className, 'dayContainer',
          // {'class_name': true}
        )}
        aria-describedby={id}
        onClick={currentDay && handleDayClick}
      >
        <div className="dayNumber">{day.getDate()}</div>
        <div className="place">
          {currentDay?.status === STATUS.BUSY && currentDay.place}
          {currentDay?.status === STATUS.HOLIDAY && "Wakacje"}
        </div>
      </div>
    )
  }

  return (
    <div className={className}>
      <DayPicker
        modifiers={modifiers}
        weekdaysShort={WEEKDAYS_SHORT}
        months={MONTHS}
        month={new Date(`${year}, ${index + 1}`)}
        firstDayOfWeek={FIRST_DAY_OF_WEEK}
        renderDay={renderDay}
        canChangeMonth={false}
      />

      {/*{currentDay?.status === STATUS.BUSY && <Popover*/}
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <DetailsOfTerm currentDay={currentDay}/>
      </Popover>    </div>
  )
}

const StyledCalendar = styled(MonthView)`
  .DayPicker-Day {
    padding: 0;
  }

  .place {
    color: black;
    font-size: 0.625rem;

    @media (max-width: 600px) {
      display: none;
    }
  }

  .dayContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: solid 1px ${COLORS.grey.light};
    width: 2.5rem;
    height: 2.5rem;
    position: relative;

    @media (min-width: 600px) {
      width: 4rem;
      height: 4rem;
    }
  }

  .dayNumber {
    top: 0.5rem;
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .DayPicker-Day--busy {
    background-color: #B2E0B1;
    font-size: 1.3rem;
  }

  .DayPicker-Day--today {
    background-color: #d4d4d4;
  }

  .DayPicker-Day--holidays {
    background-color: #5bc0de;
    font-size: 1.3rem;
  }

  .DayPicker-Weekday {
    padding: 0.5rem 0;
    background-color: ${COLORS.grey.light};
    color: black;
  }

`

export default StyledCalendar

