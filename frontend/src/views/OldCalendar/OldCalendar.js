import React, { useState } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Tab from '@material-ui/core/Tab'
import Tabs from '@material-ui/core/Tabs'
import styled from 'styled-components'

import { YEAR_2021 } from '../../termsJSON/terminy2021'
import { YEAR_2022 } from '../../termsJSON/terminy2022'

import NewCalendar from '../NewCalendar'
import TabPanel from './TabPanel'

import { STATUS } from '../../constants'

function a11yProps (index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  }
}

const howMuchTermsWithStatus = (element, status) => {
  return element.status === status
}

const OldCalendar = ({ className }) => {
  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const years = [
    {
      name: 2021,
      details: YEAR_2021
    },
    {
      name: 2022,
      details: YEAR_2022
    }
  ]

  const getWeddingsYearAmount = (yearDetails) => {
    let allWeddings = 0

    yearDetails.forEach((month) => {
      const weddingsAmount = month.days.filter((element) => howMuchTermsWithStatus(element, STATUS.BUSY))
      allWeddings = allWeddings + weddingsAmount.length
    })

    return allWeddings
  }

  return (
    <div className={className}>
      <AppBar position="fixed">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          {years.map((year, id) => {
            const label = `${year.name}`

            return (
              <Tab key={year.name} label={label} {...a11yProps(id)} />
            )
          })}
        </Tabs>
      </AppBar>

      {years.map((year, id) => {
        const weddingAmount = getWeddingsYearAmount(year.details)

        return (
          <TabPanel key={id} value={value} index={id}>
            ilosc wesel: {weddingAmount}
            <NewCalendar year={year}/>
          </TabPanel>
        )
      })}
    </div>
  )
}

const StyledOldCalendar = styled(OldCalendar)`
  padding-top: 3rem;
`

OldCalendar.propTypes = {}

OldCalendar.displayName = 'OldCalendar'

export default StyledOldCalendar
