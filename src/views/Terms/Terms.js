import React, { Component } from 'react';
import PropTypes from "prop-types";
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Typography';

import YEAR_2020 from '../../termsJSON/terminy2020';
import YEAR_2021 from '../../termsJSON/terminy2021';

import Months from "../../components/Months";


const YEAR_2020_TITLE_TEXT = "2020";
const YEAR_2021_TITLE_TEXT = "2021";


function TabPanel(props) {
  const {children, value, index, ...other} = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

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
        <AppBar position="static">
          <Tabs value={value} onChange={this.handleChange} aria-label="simple tabs example">
            <Tab label={YEAR_2020_TITLE_TEXT} {...a11yProps(0)} />
            <Tab label={YEAR_2021_TITLE_TEXT} {...a11yProps(1)} />
          </Tabs>
        </AppBar>

        <TabPanel value={value} index={0} className={classes.tabContainer}>
          <Months table={YEAR_2020}/>
        </TabPanel>
        <TabPanel value={value} index={1} className={classes.tabContainer}>
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
