import React, { FC } from 'react'
import MonthView from './MonthView'
import styled from 'styled-components'
import { IYear } from '../../types/types'

interface ICalendar {
  className: string,
  year: IYear}

const Calendar: FC<ICalendar> = ({ className, year }) => (
  <div className={className}>
    <div className="monthsContainer">
      {year.details.map((month, index) => (
        <MonthView key={month.name} year={year.name} month={month} index={index}/>
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
