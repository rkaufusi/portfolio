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

    return (
        <div>
            <Paper sx={{background: "#f9f9f9", paddingTop: 10, paddingBottom: 10}}>
                <Grid container direction='row' justifyContent='center'>
                    <Grid item xs={9} >
                        <Grid container alignItems="center" sx={{paddingLeft: 6}}>
                            <Grid item xs={12}>
                                <Typography variant="h2">
                                    Rhett Kaufusi
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="h4" sx={heading} color="#484848">
                                    Education
                                </Typography>
                            </Grid>
                            <Grid item xs={10} sx={items}>
                                <Typography variant="h5" color="#003153">
                                    Western Governors University
                                    <Typography variant="h6" fontStyle="italic">
                                    - Bachelors of Science Software Development
                                    </Typography>
                                </Typography>
                                <Typography>                             
                                        Coursework: Web Development, Advanced Java Concepts, Technical Communication, Operating Systems, User Interface Design, Software Quality Assurance, Mobile App Development, Structure Query Language.           
                                </Typography>
                            </Grid>
                            <Grid item xs={10} sx={heading}>
                                <Typography variant="h4" color="#484848">
                                    Projects
                                </Typography>
                                <Typography variant="h5" color="#003153">
                                    Crypto Search Engine <Typography fontStyle="italic">- Front End Developer</Typography>
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
                                <Typography variant="h5" color="#003153">
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
                                <Typography variant="h5" color="#003153">
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
                                <Typography variant="h4" color="#484848">
                                    Work History
                                </Typography>
                                <Typography variant="h5" color="#003153">
                                    Omeo Technology <Typography fontStyle="italic">- Eugene Oregon</Typography>
                                </Typography>
                                <Typography variant="h6" sx={{paddingLeft: 4}}>
                                    Videographer and editor
                                </Typography>
                                <Typography sx={{paddingLeft: 4}}>
                                    April 2020 - Current
                                </Typography>
                                <Typography sx={{paddingLeft: 4}}>
                                    Instituted monthly online expo which replaced in person events due to COVID. Filmed and edited content for advertisements and social media. 
                                </Typography>
                            </Grid>
                        </Grid>                     
                    </Grid>
                    <Grid item xs={3}>
                        <Grid container>
                            <Grid item xs={12} sx={{paddingBottom: 8}}>
                                <List>
                                    <ListItem>
                                        <Typography>
                                            Corvallis, OR 97333
                                        </Typography>
                                    </ListItem>
                                    <ListItem>
                                <Typography>
                                    <a href="https://github.com/rkaufusi/" target="_blank" rel="noreferrer">GitHub</a>
                                </Typography>
                                </ListItem>
                                <ListItem>
                                <Typography>
                                    <a href="https://www.linkedin.com/in/rhett-kaufusi/" target="_blank" rel="noreferrer">LinkedIn</a>
                                </Typography>
                                </ListItem>
                                </List>
                            </Grid>
                            <Grid item xs={12} sx={{paddingBottom: 8}}>
                                <Typography variant="h6" color="#003153">
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
                            <Grid item xs={12}>
                                <Typography variant="h6" color="#003153">
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
