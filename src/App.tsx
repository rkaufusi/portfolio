import React from 'react';
import Grid from '@mui/material/Grid'
import './App.css';
//import {makeStyles} from '@mui/styles'
import Avatar from '@mui/material/Avatar';

function App() {

  return (
    <div className="App">
      <Grid container>
        <Grid item xs={12} md={6}>
            Rhett Kaufusi
        </Grid>
        <Grid item xs={12} md={6}>
          <Avatar 
            src="https://avatars.githubusercontent.com/u/29996077?s=400&u=7ff0609f49dde0b01183b37e8d6384a9ef17f540&v=4" 
            alt="Picture of Rhett" 
            sx={{ width: 480, height: 480 }}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
