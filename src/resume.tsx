import React from 'react'
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import {useState} from 'react'
import cryptoHumanNetworks from './ProjectItems'




const Resume = () => {
    const [dense, setDense] = useState(true);
    return (
        <div>
            <Paper sx={{background: "#dddddd", paddingTop: 10, paddingBottom: 10}}>
                <Grid container >
                    <Grid item xs={9}>
                        <Grid container justifyContent="center" alignItems="top">
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
                                            <ListItemText primary={value.text}/>
                                        </ListItem>
                                        )
                                    })}
                                </List>
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

                        </Grid>
                    </Grid>
                </Grid>

            </Paper>     
        </div>
    )
}

export default Resume
