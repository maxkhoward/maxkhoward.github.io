import React, { Component } from "react";
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import {
  Route,
  Switch,
  HashRouter
} from "react-router-dom";
import classNames from 'classnames';

import Nav from "./Nav";
import Container from "./Container";
import Post from "./Post";

const API = 'http://18.219.3.219/wp-json/wp/v2/';
const CATEGORIES = 'categories';
const POSTS = 'posts'

let i = 0;

function keyGen() {
  i++
  return (i);
}

class Posts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
      posts: [],
      isLoading: true,
      showNav: false,
      showPosts: false
    };

    this.showHidePosts = this.showHidePosts.bind(this);
  }

  componentDidMount() {
    fetch(API + CATEGORIES)
      .then(response => response.json())
      .then(data => this.setState({ categories: data, isLoading: false }))
      .catch(function (err) {
        return err;
      });
    fetch(API + POSTS)
      .then(response => response.json())
      .then(data => this.setState({ posts: data, isLoading: false }))
      .then(this.showNav())
      .catch(function (err) {
        return err;
      });
  }

  renderCatRoutes(posts, showHidePosts) {
    const routes = [];
    this.state.categories.map(function(cat, index){
      routes.push(
        <Route
          key={ index + 1 }
          path={'/posts/' + cat.slug}
          component={() => <Container
            showHidePosts={showHidePosts}
            catSlug={cat.slug}
            catName={cat.name}
            catID={cat.id}
            posts={posts}
            />}
        />
      );
    });
    routes.push(
      <Route
        key={ 0 }
        path={'/posts'}
        exact
        component={() => <Container catSlug={""} catName={"Looking for a desk"} catID={""} posts={posts}/>}
      />
    )
    return (routes);
  }

  showNav() {
    this.timeoutId = setTimeout(function () {
        this.setState({showNav: true});
        this.showHidePosts();
    }.bind(this), 300);
  }

  showHidePosts() {
    // this.setState({
    //   showPosts: !this.state.showPosts
    // })
    //document.getElementById('posts').classList.add('showPosts');
  }

  renderPostRoutes(posts, showHidePosts) {
    const routes = [];
    posts.map(function(post, index){
      routes.push(
        <Route
          key={ index }
          path={'/posts/' + post.slug}
          component={() => <Post
            postID = { post.id }
            postCategories = { post.categories }
            postTitle = { post.title.rendered }
            postSlug = { post.slug }
            postDate = { post.date }
            postAuthor = "Max Howard"
            postContent = { post.content.rendered }
            postImage = { post.acf.featured_image }
            postBannerImage = { post.acf.banner_image }
            postFormat = { post.format }
            postSummary = { post.acf.summary }
            postType = { post.acf.type }
            showHidePosts={showHidePosts}
          />}
        />
      );
    });
    return (routes);
  }

  render() {
    if (this.state.isLoading)
      return (
        <div className="posts-page" id="posts-page">
          <div id="posts" className="loading-posts">
            <h2>Is Loading</h2>
          </div>
        </div>
      );
    else
      return (
  			<div className="posts-page" id="posts-page">

            <div className="posts-content">
              <Nav categories={ this.state.categories } hidden={!this.state.showNav} />

  						<div id="posts" className={classNames('posts showPosts')}>
                { this.renderCatRoutes(this.state.posts, this.showHidePosts) }
                { this.renderPostRoutes(this.state.posts, this.showHidePosts) }
  						</div>
  					</div>

  			</div>
      );
  }
}
 
export default Posts;
