import React, { Component } from 'react'
import PropTypes from "prop-types";

import MenuItem from '../MenuItem'
import { MENU_ITEMS, LOGO_ON_THE_FLOWERS } from '../../constants';
import Link from "next/link";


class MenuComponent extends Component {
  getMenuItems = () => (
    MENU_ITEMS.map(({name, link}) => (
      <MenuItem key={name} title={name} href={link}/>
    ))
  );

  render() {
    const {classes} = this.props;

    return (
      <div className={classes.mainContainer}>
        <Link href={'./'}>
            <div className={classes.photoContainer}>
              <img
                src={LOGO_ON_THE_FLOWERS}
                alt={'photo 1'}
                className={classes.photo}
              />
            </div>
        </Link>
        <div className={classes.menuContainer}>
          {this.getMenuItems()}
        </div>
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
