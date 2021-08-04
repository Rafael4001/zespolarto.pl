import React, {Component} from 'react'
import PropTypes from "prop-types";

import MenuItem from '../MenuItem'
import {MENU_ITEMS, LOGO_ON_THE_FLOWERS} from '../../constants';
import Link from "next/link";
import Image from 'next/image'

import MenuBurger from './MenuBurger'


const MenuComponent = ({classes}) => {
  const MenuItems = () => (
    MENU_ITEMS.map(({name, link, as}) => (
      <MenuItem key={name} title={name} href={link} as={as}/>
    ))
  );

  const MobileMenu = () => {
    return (
      <div className={classes.mainContainer}>
        <Link href={'./'} passHref>
          <div className={classes.photoContainerMain}>
            <div className={classes.photoContainer}>
              <Image
                src={LOGO_ON_THE_FLOWERS}
                alt={'photo 1'}
                layout="responsive"
                width={342}
                height={300}
              />
            </div>

          </div>
        </Link>
        <MenuBurger/>
      </div>
    )
  };


  const WebMenu = () => (
    <div className={classes.mainContainer}>
      <Link href={'./'} passHref>
        <div className={classes.photoContainerMain}>
          <div className={classes.photoContainer}>
            <Image
              src={LOGO_ON_THE_FLOWERS}
              alt={'photo 1'}
              layout="responsive"
              width={342}
              height={300}
            />
          </div>

        </div>
      </Link>
      <div className={classes.menuContainer}>
        <MenuItems/>
      </div>
    </div>
  );
  return (
    <nav>
      <div className={classes.menuWeb}>
        <WebMenu/>
      </div>
      <div className={classes.menuMobile}>
        <MobileMenu/>
      </div>
    </nav>
  )

}

MenuComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

MenuComponent.defaultProps = {};

MenuComponent.displayName = 'MenuComponent';

export default MenuComponent
