import React, { useState } from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Accordion, AccordionDetails, AccordionSummary } from '@material-ui/core/';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
//import ExpandLessIcon from '@material-ui/icons/ExpandLess';

//import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
//import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import {useLocation} from 'react-router-dom';
import { likePost, deletePost } from '../../../actions/posts';
import useStyles from './styles';


/*const handleChange = () => (
  rm == "READ MORE" ? "READ LESS" : "READ MORE"
);*/

const Post = ({ post, setCurrentId }) => {
  const [readMore, setReadMore] = useState(false);
  const dispatch = useDispatch();
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem('profile'));
  const rm = readMore ? 'Read Less ' : 'Read More';

  const location = useLocation();
  // console.log(location.pathname);

  const Likes = () => {
    if (post.likes.length > 0) {
      return post.likes.find((like) => like === (user?.result?.googleId || user?.result?._id))
        ? (
          <><FavoriteIcon fontSize="small" />&nbsp;{post.likes.length > 2 ? `You and ${post.likes.length - 1} others` : `${post.likes.length} like${post.likes.length > 1 ? 's' : ''}`}</>
        ) : (
          <><FavoriteBorderIcon fontSize="small" />&nbsp;{post.likes.length} {post.likes.length === 1 ? 'Like' : 'Likes'}</>
        );
    }

    return <><FavoriteBorderIcon fontSize="small" />&nbsp;Like</>;
  };

  const deleteuserPost=()=>{
    if(window.confirm("Are you sure you want to delete this post? "))
     {
       dispatch(deletePost(post._id));
       window.alert("Post deleted successfully!");
     }
  }

  return (
    <Card className={classes.card} raised elevation={6}>
      <CardMedia className={classes.media} image={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={post.title} />
      <div className={classes.overlay}>
        <Typography variant="h6">{post.name}</Typography>
        <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
      </div>
      {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) &&(location.pathname ==='/myposts')&&(
        <div className={classes.overlay2}>
          <Button onClick={() => {setCurrentId(post._id); window.scrollTo(0,0);}} style={{ color: 'white' }} size="small">
            <MoreHorizIcon fontSize="default" />
          </Button>
        </div>
      )}
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary" component="h2">{post.tags.map((tag) => `#${tag} `)}</Typography>
      </div>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} onClick={() => { setReadMore(!readMore) }}><Typography className={classes.heading} gutterBottom variant="h5" component="h2">
          {post.title}
        </Typography>
          <Typography className={classes.secondaryHeading} variant='overline' >

            {rm}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <CardContent>
            <Typography className={classes.postmsg} variant="body2"  color="textPrimary" component="p">
              {post.message}
            </Typography>
          </CardContent>
        </AccordionDetails>
      </Accordion>

      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary" disabled={!user?.result} onClick={() => dispatch(likePost(post._id))}>
          <Likes />
        </Button>
        {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (location.pathname ==='/myposts') && (
          <Button size="small" color="secondary" onClick={deleteuserPost}>
            <DeleteIcon fontSize="small" /> Delete
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default Post;
