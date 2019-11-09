import React, { Component } from 'react'
import PropTypes from "prop-types";

import MenuItem from '../MenuItem'
import { MENU_ITEMS, LOGO_ON_THE_FLOWERS } from '../../constants';


class MenuComponent extends Component {
  getDemoItems = () => (
    MENU_ITEMS.map(({name, link}) => (
      <MenuItem key={name} title={name} href={link}/>
    ))
  );

  render() {
    const {classes} = this.props;

    return (
      <div className={classes.mainContainer}>
        <div className={classes.photoContainer}>
          <img
            src={LOGO_ON_THE_FLOWERS}
            alt={'photo 1'}
            className={classes.photo}
          />
        </div>
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
