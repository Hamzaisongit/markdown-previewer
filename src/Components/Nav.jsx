import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Switch from '@mui/material/Switch';
import Context from "../Context/creator";

export default function Nav() {

  const {setTheme} = useContext(Context)

  function handleClick(e){
    if(e.target.checked){
      setTheme('black')
    }else{
      setTheme('white')
    }
    console.log('hi')
  }

  const styles = {
    link: {
      textDecoration: 'none',
      color: '#fff',
      fontSize: '24px',
      fontWeight: 'bold',
      marginLeft: '20px',
      fontFamily: 'Arial, sans-serif',
    },
    title: {
      fontSize: '28px',
      fontWeight: 'bold',
      margin: 'auto',
      color: '#fff',
    },
    toolbar: {
      display: 'flex',
      justifyContent: 'space-between',
    },
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar style={styles.toolbar}>
          <span style={styles.title}>
            <Link to="/Previewer" style={styles.link}>Markdown Previewer</Link>
          </span>
          <label>change theme: <input id="tgl" type="checkbox" color="warning" onClick={handleClick} value={10} /></label>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
