import React from 'react';
import Grid from '@mui/material/Grid'
import Avatar from '@mui/material/Avatar';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography'
import projects from './projects'
import Project from './project'
import Resume from './resume'

function App() {

  return (
    <>
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
                <a href="https://github.com/rkaufusi/" target="_blank" rel="noreferrer">GitHub</a>
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6">
                <a href="https://www.linkedin.com/in/rhett-kaufusi/" target="_blank" rel="noreferrer">LinkedIn</a>
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
            sx={{ width: 450, height: 450 }}
          />
          </Grid>
        </Grid>
      </Grid>
      </Paper>
      <Paper sx={{background: "#f7e7c5", paddingTop: 5, paddingBottom: 10}}>
        <Grid 
          container
          display="flex"
          direction="row"   
          justifyContent="flex-start"
          alignItems="center" 
          space-between={1}    
        >
          {projects.map((value, index) => { 
            return(
              <Grid item xs={12} md={6} lg={4} sx={{p: 5, justifyContent: "center"}}>
                <Project title={value.title} projectImage={value.image} url={value.url}/>
              </Grid>
            )
          })}       
        </Grid>
      </Paper>
      <Resume/>
    </>
  );
}

export default App;
