import React, { useState, useRef, useEffect, FC } from 'react'
import { passwordTerms } from '../constants'
import styled from 'styled-components'
import OldCalendar from './OldCalendar'

interface ITerms {
  className: string
}

const UseFocus = () => {
  const htmlElRef = useRef(null)
  const setFocus = () => {
    htmlElRef.current && htmlElRef.current.focus()
  }

  return [htmlElRef, setFocus]
}

const Terms: FC<ITerms> = ({ className }) => {
  const [pasValue, setPasValues] = useState('')
  const [input1Ref, setInput1Focus] = UseFocus()

  useEffect(() => {
    // @ts-ignore
    setInput1Focus()
  }, [])

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
          ref={input1Ref}
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
