import React from 'react';
import Grid from '@mui/material/Grid'
import './App.css';
//import {makeStyles} from '@mui/styles'
import Avatar from '@mui/material/Avatar';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography'

function App() {

  return (
    <div >
      <Paper sx={{background: "#dddddd", paddingTop: 10, paddingBottom: 10}}>
        <Grid 
          container
          direction="row"   
          justifyContent="center"
          alignItems="center"
        >
        
        <Grid item xs={12} md={6}>
          <Grid 
            container 
            direction="column"   
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid item xs={12}>
              <Typography variant="h1">
                Rhett
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h1">
                Kaufusi
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h4">
                Software Engineer
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6">
                <a href="https://github.com/rkaufusi/" target="_blank">GitHub</a>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        
        <Grid item xs={12} md={6}>
        <Grid 
          container
          direction="column"   
          alignItems="center">
          <Avatar 
            src="https://avatars.githubusercontent.com/u/29996077?s=400&u=7ff0609f49dde0b01183b37e8d6384a9ef17f540&v=4" 
            alt="Picture of Rhett" 
            sx={{ width: 480, height: 480 }}
          />
          </Grid>
        </Grid>
      </Grid>
      </Paper>
    </div>
  );
}

export default App;
