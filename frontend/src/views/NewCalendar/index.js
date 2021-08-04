import React, {useState} from "react";
import 'react-day-picker/lib/style.css';
import MonthView from './MonthView'
import styled from 'styled-components'
import Button from '@material-ui/core/Button';

import {YEAR_2021} from "../../termsJSON/terminy2021";
import {YEAR_2022} from "../../termsJSON/terminy2022";

const years = {
  year2021: {
    name: 2021,
    details: YEAR_2021,
  },
  year2022: {
    name: 2022,
    details: YEAR_2022,
  }
}

const Calendar = ({className}) => {
  const [year, setYear] = useState(years.year2021)

  return (
    <div className={className}>
      <div className="buttonsContainer">
        <Button
          variant={year.name === years.year2021.name ? "contained" : "outlined"}
          color="primary"
          onClick={() => setYear(years.year2021)}>2021</Button>
        <Button
          variant={year.name === years.year2022.name ? "contained" : "outlined"}
          color="primary"
          onClick={() => setYear(years.year2022)}>2022</Button>
      </div>
      <div className="monthsContainer">
        {year.details.map((month, index) => (
          <MonthView year={year.name} month={month} index={index}/>
        ))}
      </div>
    </div>
  )

}
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

