import classNames from 'classnames';
import React from 'react'
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import Link from 'next/link'
import { useRouter } from 'next/router'


const MenuItem = ({classes, title, href, as}) => {
  const router = useRouter()

  return (
    <Link href={href} as={as} passHref>
      <Typography className={classNames(
        classes.navItem,
        {[classes.activeLink]: router.asPath === href}
      )}>{title}</Typography>
    </Link>
  )

}


MenuItem.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

MenuItem.defaultProps = {};

MenuItem.displayName = 'MenuItem';

export default MenuItem
