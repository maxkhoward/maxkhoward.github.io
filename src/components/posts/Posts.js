import React, { Component } from "react";
import { Route } from "react-router-dom";
import classNames from 'classnames';

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
      isLoading: true,
      showNav: false,
      showPosts: false
    };

    this.showHidePosts = this.showHidePosts.bind(this);
  }

  componentDidMount() {
    fetch(API + CATEGORIES)
      .then(response => response.json())
      .then(data => this.setState({ categories: data }))
      .then(this.showNav())
      .catch(function (err) {
        return err;
      });
    fetch(API + POSTS + '?per_page=100')
      .then(response => response.json())
      .then(data => this.setState({ posts: data }))
      .then(this.showNav())
      .catch(function (err) {
        return err;
      });
    window.scrollTo(0, 0);
  }

  renderCatRoutes(posts, showHidePosts) {
    const routes = [];
    this.state.categories.forEach(function(cat, index){
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
    if (this.state.categories !== [] && this.state.posts !== []){
      this.timeoutId = setTimeout(function () {
          this.setState({isLoading: false});
      }.bind(this), 300);
      this.timeoutId = setTimeout(function () {
          this.setState({showNav: true});
          //this.showHidePosts();
      }.bind(this), 300);
    }
  }

  showHidePosts() {
    // this.setState({
    //   showPosts: !this.state.showPosts
    // })
    //document.getElementById('posts').classList.add('showPosts');
  }

  renderPostRoutes(posts, showHidePosts) {
    const routes = [];
    posts.forEach(function(post, index){
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
          <div className="posts-content">
            <Nav categories={ this.state.categories } hidden={!this.state.showNav} />
            <div id="posts" className="loading-posts">
              <div className="true-center">
                <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
              </div>
            </div>
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
