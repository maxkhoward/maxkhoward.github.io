import React, { Component } from "react";
import {
  Route,
  HashRouter
} from "react-router-dom";
import { CSSTransitionGroup } from 'react-transition-group'

import Nav from "./Nav";
import Container from "./Container";
import Post from "./Post";

const API = 'http://18.219.3.219/wp-json/wp/v2/';
const CATEGORIES = 'categories';
const POSTS = 'posts'

class Posts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
      posts: [],
      isLoading: true
    };
  }

  componentDidMount() {
    fetch(API + CATEGORIES)
      .then(response => response.json())
      .then(data => this.setState({ categories: data, isLoading: false }));
    fetch(API + POSTS)
      .then(response => response.json())
      .then(data => this.setState({ posts: data, isLoading: false }));
  }

  renderCatRoutes(posts) {
    const routes = [];
    this.state.categories.map(function(cat, index){
      routes.push(
        <Route
          key={ index + 1 }
          path={'/posts/' + cat.slug}
          component={() => <Container catSlug={cat.slug} catName={cat.name} catID={cat.id} posts={posts}/>}
        />
      );
    });
    routes.push(
      <Route
        key={ 0 }
        path={'/posts'}
        exact
        component={() => <Container catSlug={""} catName={"Max Howard"} catID={""} posts={posts}/>}
      />
    )
    return (routes);
  }

  renderPostRoutes(posts) {
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
          />}
        />
      );
    });
    return (routes);
  }

  render() {
    if (this.state.isLoading)
      return (
        <h2>Is Loading</h2>
      );
    else
      return (
  			<div>
  				<HashRouter>
  					<div className="posts-content">
              <Nav categories={ this.state.categories } />

  						<div className="posts">
                <CSSTransitionGroup
                  transitionName="example"
                  transitionEnterTimeout={5000}
                  transitionLeaveTimeout={3000}>
                  { this.renderCatRoutes(this.state.posts) }


                  { this.renderPostRoutes(this.state.posts) }
                </CSSTransitionGroup>

  						</div>
  					</div>
  				</HashRouter>
  			</div>
      );
  }
}
 
export default Posts;
