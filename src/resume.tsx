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




const Resume = () => {
    const [dense, setDense] = useState(true);
    return (
        <div>
            <Paper sx={{background: "#dddddd", paddingTop: 10, paddingBottom: 10}}>
                <Grid container justifyContent='center'>
                    <Grid item xs={9} >
                        <Grid container sx={{p: 5}}>
                            <Grid item xs={12}>
                                <Typography variant="h1" >
                                    Rhett Kaufusi
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="h4" >
                                    Education
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="h6" >
                                    Western Governors University
                                </Typography>
                                <Typography variant="h6" >
                                    Bachelors of Science Software Development
                                </Typography>
                                <Typography>
                                    April 2018 - December 2020
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="h4" >
                                    Projects
                                </Typography>
                                <Typography variant="h6" >
                                    Crypto Human Networks
                                </Typography>
                                <Typography variant="h6">
                                    Front End Developer
                                </Typography>
                                <List dense={dense}>
                                    {cryptoHumanNetworks.map((value)=>{
                                        return (
                                          <ListItem>
                                            <CircleIcon sx={{fontSize: 8, p: 1}}/>
                                            <ListItemText primary={value.text}/>
                                          </ListItem>
                                        )
                                    })}
                                </List>
                                <Typography variant="h6" >
                                    Project Management KanBan
                                </Typography>
                                <Typography variant="h6">
                                    Full Stack Developer
                                </Typography>
                                <List dense={dense}>
                                    {kanBan.map((value)=>{
                                        return (
                                          <ListItem>
                                            <CircleIcon sx={{fontSize: 8, p: 1}}/>
                                            <ListItemText primary={value.text}/>
                                          </ListItem>
                                        )
                                    })}
                                </List>
                                <Typography variant="h6" >
                                    Sorting Algorithm Visualizer
                                </Typography>
                                <Typography variant="h6">
                                    Front End Developer
                                </Typography>
                                <List dense={dense}>
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
                                <Typography variant="h4" >
                                    Work History
                                </Typography>
                                <Typography variant="h6" >
                                    Omeo Technology
                                </Typography>
                                <Typography variant="h6">
                                    Eugene Oregon
                                </Typography>
                                <Typography variant="h6">
                                    Videographer and editor
                                </Typography>
                                <Typography >
                                    April 2020 - Current
                                </Typography>
                                <Typography >
                                    Responsible for monthly online expo which replaced in person events due to COVID. 
                                    Filmed and edited content for social media. 
                                    https://www.facebook.com/OmeoTechnologyLtd/
                                </Typography>
                            </Grid>
                        </Grid>                     
                    </Grid>
                    <Grid item xs={3}>
                        <Grid container>
                            <Grid item>
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
                            <Grid item>
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
