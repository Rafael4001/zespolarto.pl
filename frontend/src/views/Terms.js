import React, {useState} from 'react';
import {passwordTerms} from '../constants'
import styled from 'styled-components'
import  OldCalendar from './OldCalendar'

const Terms = ({className}) => {
  const [pasValue, setPasValues] = useState('')

  if (pasValue === passwordTerms) {
    return <OldCalendar/>
  }


  return (
    <div className={className}>
      <div className="main-container">
        <span>Aby przejść do informacji o terminach wpisz odpowiedni kod</span>
        <input
          className="pass-input"
          name="pasInput"
          value={pasValue}
          onChange={(event) => setPasValues(event.target.value)}
        />
      </div>
    </div>
  )
}
const StyledTerms = styled(Terms)`
  .main-container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-content: center;
    padding: 1rem;
  }
  .pass-input {
    width: 100px;
    margin: 0 5px;
  }
`

export default StyledTerms