import React, { useState } from 'react';
import { Container, Grow, Grid, Paper, Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';
import Loader from '../Home/Loader';
import Post from './Post/Post';
import Form from '../Form/Form';
import useStyles from './styles';



const MyPosts = () => {
  const [currentId, setCurrentId] = useState(0);
  const posts = useSelector((state) => state.posts);
  const user = JSON.parse(localStorage.getItem('profile'));
  const classes = useStyles();
  const userposts = posts.filter(post => (user?.result?.googleId === post?.creator || user?.result?._id === post?.creator));

  const FirstPost = () => {
    return (
      <Container component="main" maxWidth="xs">
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h5"> Looks like it's your first post! </Typography>
          <img src="https://i.pinimg.com/736x/73/56/71/735671025f3d9ec5eac2856ef43ca12b.jpg" alt="Begin Writing" width="150px"></img>
        </Paper>
      </Container>
    );
  }
  return (
    <Grow in>
      <Container>
        <Grid className={classes.myPostsMainContainer} container justify="space-between" alignItems="stretch" spacing={3}>

          <Grid item xs={12} sm={7}>
            {!posts.length ? <Loader /> : (
              <Grid container alignItems="space-between" spacing={3}>
                {
                  !userposts.length ? <FirstPost /> : (userposts.map((post) => (
                    <Grid className={classes.mypostscontainer} alignItems="space-between" spacing={3} key={post._id} item xs={12} sm={6} md={6}>
                      <Post post={post} setCurrentId={setCurrentId} />
                    </Grid>
                  )
                  )
                  )
                }
              </Grid>)
            }
          </Grid>
          <Grid item xs={12} sm={4} >
            <Form currentId={currentId} setCurrentId={setCurrentId} />
          </Grid>
        </Grid>
      </Container>
    </Grow>

  );
};

export default MyPosts;

