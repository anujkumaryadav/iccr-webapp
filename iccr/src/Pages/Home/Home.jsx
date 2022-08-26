import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, IconButton, Toolbar, Collapse } from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link as Scroll } from 'react-scroll';
import './Home.css'
import Link from 'react-scroll';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    fontFamily: 'Nunito',
  },
  appbar: {
    background: 'none',
  },
  appbarWrapper: {
    width: '80%',
    margin: '0 auto',
  },
  appbarTitle: {
    flexGrow: '1',
  },
  icon: {
    color: '#000',
    fontSize: '2rem',
  },
  colorText: {
    color: '#000000',
  },
  container: {
    textAlign: 'center',
  },
  title: {
    color: '#000000',
    fontSize: '4.5rem',
  },
  goDown: {
    color: '#000000',
    fontSize: '4rem',
  },
}));

export default function Home() {

  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  const [Toggle, setToggle] = useState()

  useEffect(() => {
    setChecked(true);
  }, []);





  return (
    <div className={classes.root} id="header">
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar className={classes.appbarWrapper}>
          <h1 className={classes.appbarTitle}>
            <span className={classes.colorText}>ICCR</span>
          </h1>
          <IconButton onClick={() => { setToggle(!Toggle) }} >
            <SortIcon className={classes.icon} />
          </IconButton>
        </Toolbar>
      </AppBar>

      {Toggle &&

        <div className='home-sidebar border'>
           <a href='/'> <p className='sidebar-items' > Login for ICCR</p> </a>
           <a href='/ROLogin'> <p className='sidebar-items' > Login for Regional Office</p> </a>
           <a href='/student-login'> <p className='sidebar-items' > Signup for Students</p> </a>
        </div>

      }

      <Collapse
        in={checked}
        {...(checked ? { timeout: 1000 } : {})}
        collapsedHeight={50}
      >
        <div className={classes.container}>
          <h1 className={classes.title}>
            Welcome to <br />
            Indian Council<span className={classes.colorText}> For Cultural Relations</span>
          </h1>
          <Scroll to="place-to-visit" smooth={true}>
            <IconButton  >
              <ExpandMoreIcon className={classes.goDown} />
            </IconButton>
          </Scroll>
        </div>
      </Collapse>

    </div>
  );
}

