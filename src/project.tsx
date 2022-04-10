import React from 'react'
import {useState} from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

type proj = {
  title: string,
  projectImage: string,
  url: string
}

const Project = ({title, projectImage, url}: proj) => {

  return (
    <Card sx={{ maxWidth: 345, minWidth: 345, "&:hover": { transform: "scale3d(1.10, 1.10, 1)"}}}>
      <CardActionArea href={url} target="_blank">
        <CardMedia
          component="img"
          height="150"
          image={projectImage}
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
