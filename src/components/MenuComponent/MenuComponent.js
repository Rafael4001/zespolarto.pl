import React, { Component } from 'react'
import PropTypes from "prop-types";

import MenuItem from '../MenuItem'
import { DEMO_ITEMS } from '../../constants';


class MenuComponent extends Component {
  getDemoItems = () => (
    DEMO_ITEMS.map((item) => (
      <MenuItem title={item.name}/>
    ))
  );

  render() {
    const {classes} = this.props;

    return (
      <div className={classes.mainContainer}>
        {this.getDemoItems()}
      </div>
    )
  }
}

MenuComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

MenuComponent.defaultProps = {};

MenuComponent.displayName = 'MenuComponent';

export default MenuComponent
