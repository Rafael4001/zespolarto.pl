import React, { Component } from 'react'
import PropTypes from "prop-types";

import MyMenuItem from '../MenuItem'
import { MENU_ITEMS, LOGO_ON_THE_FLOWERS } from '../../constants';
import Link from "next/link";

import MenuBurger from './MenuBurger'


class MenuComponent extends Component {
  getMenuItems = () => (
    MENU_ITEMS.map(({name, link, as}) => (
      <MyMenuItem key={name} title={name} href={link} as={as}/>
    ))
  );

  getMobileMenu = () => {
    return (
      <div className={this.props.classes.menuMobile}>
        <Link href={'./'}>
          <div className={this.props.classes.logoMobileContainer}>
            <img
              src={LOGO_ON_THE_FLOWERS}
              alt={'photo 1'}
              className={this.props.classes.logoMobile}
            />
          </div>
        </Link>
        <MenuBurger/>
      </div>
    )
  };


  getWebMenu = () => (
    <div className={this.props.classes.mainContainer}>
      <Link href={'./'}>
        <div className={this.props.classes.photoContainer}>
          <img
            src={LOGO_ON_THE_FLOWERS}
            alt={'photo 1'}
            className={this.props.classes.photo}
          />
        </div>
      </Link>
      <div className={this.props.classes.menuContainer}>
        {this.getMenuItems()}
      </div>
    </div>
  );

  render() {
    const {classes} = this.props;

    return (
      <nav>
        <div className={classes.menuWeb}>
          {this.getWebMenu()}
        </div>
        <div className={classes.menuMobile}>
          {this.getMobileMenu()}
        </div>
      </nav>
    )
  }
}

MenuComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

MenuComponent.defaultProps = {};

MenuComponent.displayName = 'MenuComponent';

export default MenuComponent
