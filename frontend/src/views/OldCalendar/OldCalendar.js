import React, {useState} from 'react';
import PropTypes from "prop-types";
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import moment from 'moment';
import styled from 'styled-components'


import {YEAR_2021} from '../../termsJSON/terminy2021';
import {YEAR_2022} from '../../termsJSON/terminy2022';

import Months from "../../components/Months";
import NewCalendar from "../../views/NewCalendar";
import TabPanel from "./TabPanel";

import {DAYS, daysArray, STATUS} from "../../constants";


const YEAR_2021_TITLE_TEXT = "2021";
const YEAR_2022_TITLE_TEXT = "2022";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const howMuchTermsWithStatus = (element, status) => {
  return element.status === status;
};

const OldCalendar = ({className}) => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue)
  };

  const years = [
    {
      name: YEAR_2021_TITLE_TEXT,
      details: YEAR_2021,
    },
    {
      name: YEAR_2022_TITLE_TEXT,
      details: YEAR_2022,
    }
  ];

  const getWeddingsYearAmount = (yearDetails) => {
    let allWeddings = 0;

    yearDetails.forEach((month, index) => {
      const weddingsAmount = month.days.filter((element) => howMuchTermsWithStatus(element, STATUS.BUSY));
      allWeddings = allWeddings + weddingsAmount.length;
    });

    return allWeddings
  };

  return (
    <div className={className}>
      <AppBar position="fixed">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          {years.map((year, id) => {
            const label = `${year.name}`;

            return (
              <Tab key={year.name} label={label} {...a11yProps(id)} />
            )
          })}
          <Tab key={"NewCalendar"} label={"nowy kalendarz"} {...a11yProps(years.length)} />
        </Tabs>
      </AppBar>


      {years.map((year, id) => {
        const weddingAmount = getWeddingsYearAmount(year.details);

        return (
          <TabPanel key={id} value={value} index={id}>
            <Months table={year.details} weddingAmount={weddingAmount}/>
          </TabPanel>)
      })}
      <TabPanel  key={'NewCalendar'} value={value} index={years.length}>
        <NewCalendar/>
      </TabPanel>
    </div>
  )
};


const StyledOldCalendar = styled(OldCalendar)`
  padding-top: 3rem;
`

OldCalendar.propTypes = {};

OldCalendar.displayName = 'OldCalendar';

export default StyledOldCalendar;
