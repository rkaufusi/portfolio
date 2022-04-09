import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

type proj = {
  title: string,
  projectImage: any
}

const Project = ({title, projectImage}: proj) => {

  return (
    <Card sx={{ maxWidth: 345, minWidth: 345}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="150"
          image={projectImage}
          //image="https://avatars.githubusercontent.com/u/29996077?s=400&u=7ff0609f49dde0b01183b37e8d6384a9ef17f540&v=4"
          alt={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default Project
