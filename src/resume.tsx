import React from 'react'
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import {useState} from 'react'
import cryptoHumanNetworks, {kanBan, sortingVisualizer, certifications, skills} from './ProjectItems'
import CircleIcon from '@mui/icons-material/Circle';

/*
          container
          direction="row"   
          justifyContent="center"
          alignItems="center"

*/


const Resume = () => {
    const [dense, setDense] = useState(true);
    const items = {
        paddingLeft: 4
    }
    const heading = {
        paddingTop: 2,
        paddingBottom: 2
    }
    const listItems = {
        paddingLeft: 1
    }

    // sx={{paddingLeft: 6}}
    return (
        <div>
            <Paper sx={{background: "#f9f9f9", paddingTop: 10, paddingBottom: 10}}>
                <Grid container direction='row' justifyContent='center'>
                    <Grid item xs={9} >
                        <Grid container alignItems="center" sx={{paddingLeft: 6}}>
                            <Grid item xs={12}>
                                <Typography variant="h1">
                                    Rhett Kaufusi
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="h3" sx={heading}>
                                    Education
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sx={items}>
                                <Typography variant="h5" >
                                    Western Governors University
                                    <Typography variant="h6" fontStyle="italic">
                                    - Bachelors of Science Software Development
                                    </Typography>
                                </Typography>

                                <Typography>
                                    April 2018 - December 2020
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sx={heading}>
                                <Typography variant="h3">
                                    Projects
                                </Typography>
                                <Typography variant="h5">
                                    Crypto Human Networks <Typography fontStyle="italic">- Front End Developer</Typography>
                                </Typography>
                                <List dense={dense} sx={listItems}>
                                    {cryptoHumanNetworks.map((value)=>{
                                        return (
                                          <ListItem>
                                            <CircleIcon sx={{fontSize: 8, p: 1}}/>
                                            <ListItemText primary={value.text}/>
                                          </ListItem>
                                        )
                                    })}
                                </List>
                                <Typography variant="h5" >
                                    Project Management KanBan <Typography fontStyle="italic">- Full Stack Developer</Typography>
                                </Typography>
                                <List dense={dense} sx={listItems}>
                                    {kanBan.map((value)=>{
                                        return (
                                          <ListItem>
                                            <CircleIcon sx={{fontSize: 8, p: 1}}/>
                                            <ListItemText primary={value.text}/>
                                          </ListItem>
                                        )
                                    })}
                                </List>
                                <Typography variant="h5" >
                                    Sorting Algorithm Visualizer<Typography fontStyle="italic">- Front End Developer</Typography>
                                </Typography>
                                <List dense={dense} sx={listItems}>
                                    {sortingVisualizer.map((value)=>{
                                        return (
                                          <ListItem>
                                            <CircleIcon sx={{fontSize: 8, p: 1}}/>
                                            <ListItemText primary={value.text}/>
                                          </ListItem>
                                        )
                                    })}
                                </List>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="h3" >
                                    Work History
                                </Typography>
                                <Typography variant="h5" >
                                    Omeo Technology <Typography fontStyle="italic">- Eugene Oregon</Typography>
                                </Typography>
                                <Typography variant="h6" sx={{paddingLeft: 4}}>
                                    Videographer and editor
                                </Typography>
                                <Typography sx={{paddingLeft: 4}}>
                                    April 2020 - Current
                                </Typography>
                                <Typography sx={{paddingLeft: 4}}>
                                    Responsible for monthly online expo which replaced in person events due to COVID. 
                                    Filmed and edited content for social media. 
                                    https://www.facebook.com/OmeoTechnologyLtd/
                                </Typography>
                            </Grid>
                        </Grid>                     
                    </Grid>
                    <Grid item xs={3}>
                        <Grid container>
                            <Grid item sx={{paddingBottom: 8}}>
                                <Typography>
                                    Corvallis, OR 97333
                                </Typography>
                                <Typography>
                                    GitHub
                                </Typography>
                                <Typography>
                                    LinkedIn
                                </Typography>
                            </Grid>
                            <Grid item sx={{paddingBottom: 8}}>
                                <Typography variant="h6">
                                    Certifications
                                </Typography>
                                <List dense={dense} sx={{ display: 'list-item' }}>
                                    {certifications.map((value)=>{
                                        return (
                                          <ListItem sx={{ display: 'list-item' }}>
                                            <ListItemText primary={value.text}/>
                                          </ListItem>
                                        )
                                    })}
                                </List>
                            </Grid>
                            <Grid item>
                                <Typography variant="h6">
                                    Skills
                                </Typography>
                                <List dense={dense}>
                                    {skills.map((value)=>{
                                        return (
                                          <ListItem>
                                            <CircleIcon sx={{fontSize: 8, p: 1}}/>
                                            <ListItemText primary={value.text}/>
                                          </ListItem>
                                        )
                                    })}
                                </List>
                            </Grid>       
                        </Grid>
                    </Grid>
                </Grid>

            </Paper>     
        </div>
    )
}

export default Resume
