import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
// import {Container} from '@material-ui/core';

import Home from './components/Home/Home';
import MyPosts from './components/Posts/MyPosts';
import PostDetails from './components/PostDetails/PostDetails';
import Navbar from './components/Navbar/Navbar';
import FooterComponent from './components/Footer/FooterComponent';
import Auth from './components/Auth/Auth';
import ExplorePage from './components/ExplorePage/ExplorePage';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import useStyles from './styles';

const App = () => {
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem('profile'));
  return (
  <BrowserRouter>

    <Navbar />
    <ScrollToTop />
    <div className={classes.content}>
      <Switch>
        <Route path="/" exact component={ExplorePage} />
        <Route path="/home" exact component={()=><Redirect to="/posts"/>} />
        <Route path="/posts" exact component={Home}/>
        <Route path="/posts/search" exact component={Home}/>
        {/* <Route path="/posts/:id" component={PostDetails}/> */}
        {/* <Route path="/auth" exact component={()=>(!user ? <Auth/> : <Redirect to="/posts"/>)} /> */}
        <Route path ="/auth" exact component={Auth}/>
        <Route path="/myposts" component={MyPosts} />
      </Switch>
    </div>

    <FooterComponent />
   

  </BrowserRouter>);
};

export default App;
