import React from 'react';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from "@material-ui/icons/Menu";
import { MENU_ITEMS } from "../../../constants";
import MyMenuItem from "../../MenuItem/MenuItem.style";


//TODO to trzeba poprawic bo sie wiesza

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  paper: {
    marginRight: theme.spacing(2),
  },

  buttonBurgerMenu: {
    height: '3rem',
    margin: '1rem',
    width: 'auto',
    border: 'solid 1px black',
    boxShadow: `1px 0 5px 1px rgb(0,0,0,0.2)`,
  },
}));

const getMenuItems = () => (
  MENU_ITEMS.map(({name, link}) => (
    <MyMenuItem key={name} title={name} href={link}/>
  ))
);

export default function MenuListComposition() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen);
  };

  const handleClose = event => {
    if(anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if(event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if(prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div className={classes.root}>
      <div>
        <Button
          ref={anchorRef}
          aria-controls={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
          className={classes.buttonBurgerMenu}
        >
          <MenuIcon/>
        </Button>
      </div>

      <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
        {({TransitionProps, placement}) => (
          <Grow
            {...TransitionProps}
            style={{transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom'}}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                  {getMenuItems()}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>

    </div>
  );
}
