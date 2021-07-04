import React, { useState, useEffect } from "react";
import {
  Container,
  Grow,
  Grid,
  Paper,
  AppBar,
  TextField,
  Button,
} from "@material-ui/core";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import ChipInput from "material-ui-chip-input";

import { getPosts, getPostsBySearch } from "../../actions/posts";
import Posts from "../Posts/Posts";
import useStyles from "../../styles";


function useQuery() {
  return new URLSearchParams(useLocation().search);
}
const Home = () => {
  const [currentId, setCurrentId] = useState(0);
  const classes = useStyles();
  const dispatch = useDispatch();
  // query is where we get our page info from
  const query = useQuery();
  const history = useHistory();
  const page = query.get("page") || 1;
  const searchQuery = query.get("searchQuery");
  const [search, setSearch] = useState("");
  const [tags, setTags] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getPosts());
  }, [currentId, dispatch]);

  const searchPost = () => {
    console.log("Search value",search);
    
    console.log("tags value",tags);
    
    if(search.length==0 && tags.length==0){
      setSearch("");
      setTags([]);
      dispatch(getPosts());
      history.push("/home");
    }
    else if (search.trim() || tags) {
      //dispatch --> fetch search post
      dispatch(getPostsBySearch({ search, tags: tags.join(",") }));
      history.push(
        `/posts/search?searchQuery=${search || "none"}&tags=${tags.join(",")}` 
      ); 
    }
    // } else {
    //   setSearch("");
    //   setTags([]);
    //   history.push("/posts");
    // }
  };

  const handleKeyPress = (e) => {
    if (e.keycode === 13) {
      // search post
      searchPost();
    }
  };

  // When you have an array as state, you have to spread the previous tags first, and then add on to it.
  const handleAddChip = (tag) => setTags([...tags, tag]);

  const handleDeleteChip = (chipToDelete) =>
    setTags(tags.filter((tag) => tag !== chipToDelete));

  return (
    <Grow in>
      <Container maxWidth="xl">
        <Grid
          container
          className={classes.mainContainer}
          justify="space-around"
          alignItems="center"
          spacing={3}
        >
          <Grid item xs={12} sm={5} md={5}>
            <AppBar
              className={classes.appBarSearch}
              position="static"
              color="inherit"
            >
              {/* Textfield will serve as our search */}
              <TextField
                name="search"
                variant="outlined"
                label="Search Blogs"
                fullWidth
                value={search}
                // we don't always want a button for 'entering' tags so we create a handle key press function
                onKeyPress={handleKeyPress}
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              />
              <ChipInput
                style={{ margin: "10px 0" }}
                value={tags}
                onAdd={(chip) => handleAddChip(chip)}
                onDelete={(chip) => handleDeleteChip(chip)}
                label="Search Tags"
                variant="outlined"
              />
              <Button
                onClick={searchPost}
                className={classes.searchButton}
                color="primary"
                variant="contained"
              >
                Search
              </Button>
            </AppBar>
          </Grid>
          <Grid item xs={12} sm={9} md={9}>
            <Posts setCurrentId={setCurrentId} />
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;
