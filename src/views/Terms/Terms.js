import React, { Component } from 'react';
import PropTypes from "prop-types";
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';

import YEAR_2020 from '../../termsJSON/terminy2020';
import YEAR_2021 from '../../termsJSON/terminy2021';

import Months from "../../components/Months";
import TabPanel from "./TabPanel/index";


const YEAR_2020_TITLE_TEXT = "2020";
const YEAR_2021_TITLE_TEXT = "2021";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

class Terms extends Component {
  state = {
    value: 0
  };

  handleChange = (event, newValue) => {
    this.setState({value: newValue})
  };


  render() {
    const {classes} = this.props;
    const {value} = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="fixed">
          <Tabs value={value} onChange={this.handleChange} aria-label="simple tabs example">
            <Tab label={YEAR_2020_TITLE_TEXT} {...a11yProps(0)} />
            <Tab label={YEAR_2021_TITLE_TEXT} {...a11yProps(1)} />
          </Tabs>
        </AppBar>

        <TabPanel value={value} index={0}>
          <Months table={YEAR_2020}/>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Months table={YEAR_2021}/>
        </TabPanel>
      </div>
    )
  }
};


Terms.propTypes = {
  classes: PropTypes.object.isRequired,
};

Terms.displayName = 'Terms';

export default Terms;
