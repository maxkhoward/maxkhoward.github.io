import React, { Component } from "react";
import PropTypes from 'prop-types';
import PostCard from './PostCard';

class Container extends Component {
  constructor(props){
    super(props);
    this.renderPosts = this.renderPosts.bind(this);
  }

  renderPosts(catID) {
    const renderedPosts = [];
    this.props.posts.map(function(post){
      if (post.categories.includes(catID) || catID === ""){
        renderedPosts.push(
          <PostCard
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
          />
        );
      }
    })
    return (renderedPosts);
  }

  render() {
    return(
      <div className="page-content">
        <h1 className="page-title">{ this.props.catName }</h1>
        <div className="post-cards">
          { this.renderPosts(this.props.catID) }
        </div>
      </div>
    );
  }
}

Container.propTypes = {
  catName: PropTypes.string,
  catSlug: PropTypes.string,
  catID: PropTypes.string,
  posts: PropTypes.array
};

export default Container;
