import React, {useState} from 'react';
import Terms from '../Terms'
import {passwordTerms} from '../../constants'

const TermPage = ({classes}) => {
  const [pasValue, setPasValues] = useState('')

  if (pasValue === passwordTerms) {
    return <Terms/>
  }


  return (
    <div className={classes.mainContainer}>
      <span>Aby przejść do informacji o terminach wpisz odpowiedni kod</span>

      <input
        className={classes.pasInput}
        name="pasInput"
        value={pasValue}
        onChange={(event) => setPasValues(event.target.value)}
      />
    </div>
  )
}

export default TermPage