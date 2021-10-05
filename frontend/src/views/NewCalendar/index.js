import React from "react";
import MonthView from './MonthView'
import styled from 'styled-components'

const Calendar = ({className, year}) => (
  <div className={className}>
    <div className="monthsContainer">
      {year.details.map((month, index) => (
        <MonthView year={year.name} month={month} index={index}/>
      ))}
    </div>
  </div>
)
const StyledCalendar = styled(Calendar)`
  .buttonsContainer {
    margin-left: 1rem;
  }

  .monthsContainer {
    display: flex;
    flex-wrap: wrap;
  }
`

export default StyledCalendar

