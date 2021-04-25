import React, {useState} from 'react';
import PropTypes from "prop-types";
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';

import {YEAR_2021} from '../../termsJSON/terminy2021';
import {YEAR_2022} from '../../termsJSON/terminy2022';

import Months from "../../components/Months";
import TabPanel from "./TabPanel";

import {STATUS} from "../../constants";


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

const Terms = ({classes}) => {
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

    yearDetails.map((month) => {
      const weddingsAmount = month.days.filter(function (element) {
        return howMuchTermsWithStatus(element, STATUS.BUSY)
      });
      allWeddings = allWeddings + weddingsAmount.length;
    });

    return allWeddings
  };


  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          {years.map((year, id) => {
            const label = `${year.name}`;

            return (
              <Tab key={year.name} label={label} {...a11yProps(id)} />
            )
          })}
        </Tabs>
      </AppBar>

      {years.map((year, id) => {
        const weddingAmount = getWeddingsYearAmount(year.details);

        return (
          <TabPanel key={id} value={value} index={id}>
            <Months table={year.details} weddingAmount={weddingAmount}/>
          </TabPanel>
        )
      })}
    </div>
  )
};


Terms.propTypes = {
  classes: PropTypes.object.isRequired,
};

Terms.displayName = 'Terms';

export default Terms;
