import React from 'react'
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material'
import ShareIcon from '@mui/icons-material/Share';
import Favorite from '@mui/icons-material/Favorite';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const Post = () => {
  return (
    <div>
       <Card sx={{ margin:5 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
            H
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Henry"
        subheader="July 14, 2024"
      />
        <CardMedia
          component="img"
          height="20%"
          src="/Images/cascata_verde_img.jpeg"
          alt="Green waterfall"
        />


      <CardContent>
        <Typography variant="body2" color="text.secondary">
        A green and beautiful waterfall cascades down through moss and lush foliage, 
        creating a natural spectacle of crystal-clear waters dancing in the sunlight. 
        The serenity of the environment imparts a sense of peace and renewal.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
        <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color: "red"}} />} />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      
      </CardActions>
      </Card>
    </div>
  )
}

export default Post
