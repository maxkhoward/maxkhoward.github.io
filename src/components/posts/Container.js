import React, { Component } from "react";
import PropTypes from 'prop-types';
import PostCard from './PostCard';

class Container extends Component {
  constructor(props){
    super(props);
    this.renderPosts = this.renderPosts.bind(this);
    this.keyGen = this.keyGen.bind(this);
    this.i = 0;
  }

  keyGen() {
    this.i++
    return (this.i);
  }

  renderPosts(catID, showHidePosts) {
    const renderedPosts = [];


    this.props.posts.forEach(function(post, i){
      if (post.categories.includes(catID) || catID === ""){
        renderedPosts.push(
          <PostCard
            key = { i }
            postID = { post.id }
            postCategories = { post.categories }
            postTitle = { post.title.rendered }
            postSlug = { post.slug }
            postDate = { post.date }
            postAuthor = "Max Howard"
            postContent = { post.content.rendered }
            postImage = { post.acf.featured_image }
            postFormat = { post.format }
            postSummary = { post.acf.summary }
            postExcerpt = { post.excerpt.rendered }
            postType = { post.acf.type }
            showHidePosts = { showHidePosts }
          />
        );
      }
    })
    return (renderedPosts);
  }

  showHidePosts() {
    this.props.showHidePosts();
  }

  render() {
    return(
      <div className="page-content">
        <div className="page-title">
          <h1 className="title">max<span>k</span>howard</h1>
          <h2 className="subtitle">{ this.props.catName }</h2>
        </div>
        <div className="post-cards">

              { this.renderPosts(this.props.catID, this.props.showHidePosts) }

        </div>
      </div>
    );
  }
}

Container.propTypes = {
  catName: PropTypes.string,
  catSlug: PropTypes.string,
  posts: PropTypes.array
};

export default Container;
